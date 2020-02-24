import gql from "graphql-tag";
import { APOLLO_CLIENT_FOR_SCRIPTS } from "./apollo";

const DELETE_ALL_ARTICLES = gql`
  mutation DeleteAllArticles {
    delete_article(where: {}) {
      affected_rows
    }
  }
`;

(async () => {
  const res = await APOLLO_CLIENT_FOR_SCRIPTS.mutate({
    mutation: DELETE_ALL_ARTICLES
  });
  console.log({ res });
})();
