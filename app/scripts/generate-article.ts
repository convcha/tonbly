import gql from "graphql-tag";
import fetch from "node-fetch";
import { APOLLO_CLIENT_FOR_SCRIPTS } from "./apollo";
import "./env";

const ADD_USER = gql`
  mutation AddUser(
    $name: String!
    $email: String!
    $password: String!
    $role: String!
    $salt: String!
    $profile_image_url: String!
  ) {
    insert_user(
      objects: {
        name: $name
        email: $email
        password: $password
        role: $role
        salt: $salt
        profile_image_url: $profile_image_url
      }
      on_conflict: { constraint: user_email_key, update_columns: [email] }
    ) {
      returning {
        id
      }
    }
  }
`;

const ADD_TEST_ARTICLE = gql`
  mutation AddTestArticle(
    $title: String!
    $content: String!
    $author_user_id: Int!
    $created_at: timestamptz!
    $updated_at: timestamptz!
    $tags: [article_tag_insert_input!]!
    $comments: [comment_insert_input!]!
  ) {
    insert_article(
      objects: {
        title: $title
        content: $content
        author_user_id: $author_user_id
        created_at: $created_at
        updated_at: $updated_at
        article_tags: { data: $tags }
        comments: { data: $comments }
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

const qiitaToken = process.env.QIITA_TOKEN;
const qiitaAuthHeader = {
  Authorization: `Bearer ${qiitaToken}`
};

(async () => {
  for (let i = 1; i <= 5; i++) {
    const res = await fetch(
      `https://qiita.com/api/v2/items?page=${i}&per_page=${100}`,
      { headers: qiitaAuthHeader }
    );
    // noinspection JSMismatchedCollectionQueryUpdate
    const articles: Array<any> = await res.json();
    articles.map(async article => {
      const user: any = article.user;
      const addUserRes = await APOLLO_CLIENT_FOR_SCRIPTS.mutate({
        mutation: ADD_USER,
        variables: {
          name: user.name || user.id,
          email: `${user.id}@example.com`,
          password:
            "ydpPMitj0pwNPgj9m0pFywXSpTUGwzmebVQqI3WVmkAistOeUsyunQ/oNrVeIc1toX8jOvUUaJClLRJOhdAq6S9Z3/Fujqbw/SmKv97bWfn6fPC21lQ/uw6Um142sy+r8viYYtyku2tuV5r9KUTRjq4MVlKnqnv/xFzOkR8MUzg=",
          role: "tonbly-user",
          salt:
            "QjXR7tp4Et7FtZNf89XAphauo0j28B35CbvVN4AGerthx/rv3rPY/yuO3dHLD2jOi/YjcXq344S3uL2tx74Iow==",
          profile_image_url: user.profile_image_url
        }
      });
      const tags = article.tags.map((tag: any) => ({
        tag: {
          data: { label: tag.name },
          on_conflict: {
            constraint: "tag_label_key",
            update_columns: ["for_ignore_update"]
          }
        }
      }));
      const comments = [];
      if (Number(article.comments_count) > 0) {
        const commentsData: Array<any> = await (
          await fetch(`https://qiita.com/api/v2/items/${article.id}/comments`, {
            headers: qiitaAuthHeader
          })
        ).json();
        for (let i = 0; i < commentsData.length; i++) {
          const c = commentsData[i];
          console.log({ comment_user: c });
          const addCommentUserRes = await APOLLO_CLIENT_FOR_SCRIPTS.mutate({
            mutation: ADD_USER,
            variables: {
              name: c.user.name || c.user.id,
              email: `${c.user.id}@example.com`,
              password:
                "ydpPMitj0pwNPgj9m0pFywXSpTUGwzmebVQqI3WVmkAistOeUsyunQ/oNrVeIc1toX8jOvUUaJClLRJOhdAq6S9Z3/Fujqbw/SmKv97bWfn6fPC21lQ/uw6Um142sy+r8viYYtyku2tuV5r9KUTRjq4MVlKnqnv/xFzOkR8MUzg=",
              role: "tonbly-user",
              salt:
                "QjXR7tp4Et7FtZNf89XAphauo0j28B35CbvVN4AGerthx/rv3rPY/yuO3dHLD2jOi/YjcXq344S3uL2tx74Iow==",
              profile_image_url: c.user.profile_image_url
            }
          });
          const PUSH = {
            comment_user_id: addCommentUserRes!.data!.insert_user!.returning![0]
              .id,
            created_at: c.created_at,
            text: c.body,
            updated_at: c.updated_at
          };
          comments.push(PUSH);
          console.log({ PUSH });
        }
      }
      console.log({ comments });
      await APOLLO_CLIENT_FOR_SCRIPTS.mutate({
        mutation: ADD_TEST_ARTICLE,
        variables: {
          title: article.title,
          content: article.body,
          author_user_id: addUserRes!.data!.insert_user!.returning![0].id,
          created_at: article.created_at,
          updated_at: article.updated_at,
          tags,
          comments
        }
      });
    });
  }
})();
