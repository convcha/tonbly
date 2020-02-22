import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

export type Article = {
  __typename?: "article";
  article_tags: Array<Article_Tag>;
  article_tags_aggregate: Article_Tag_Aggregate;
  author: User;
  author_user_id: Scalars["Int"];
  comments: Array<Comment>;
  comments_aggregate: Comment_Aggregate;
  content: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  title: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

export type ArticleArticle_TagsArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type ArticleArticle_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type ArticleCommentsArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};

export type ArticleComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};

export type Article_Aggregate = {
  __typename?: "article_aggregate";
  aggregate?: Maybe<Article_Aggregate_Fields>;
  nodes: Array<Article>;
};

export type Article_Aggregate_Fields = {
  __typename?: "article_aggregate_fields";
  avg?: Maybe<Article_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Article_Max_Fields>;
  min?: Maybe<Article_Min_Fields>;
  stddev?: Maybe<Article_Stddev_Fields>;
  stddev_pop?: Maybe<Article_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Article_Stddev_Samp_Fields>;
  sum?: Maybe<Article_Sum_Fields>;
  var_pop?: Maybe<Article_Var_Pop_Fields>;
  var_samp?: Maybe<Article_Var_Samp_Fields>;
  variance?: Maybe<Article_Variance_Fields>;
};

export type Article_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Article_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

export type Article_Aggregate_Order_By = {
  avg?: Maybe<Article_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Article_Max_Order_By>;
  min?: Maybe<Article_Min_Order_By>;
  stddev?: Maybe<Article_Stddev_Order_By>;
  stddev_pop?: Maybe<Article_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Article_Stddev_Samp_Order_By>;
  sum?: Maybe<Article_Sum_Order_By>;
  var_pop?: Maybe<Article_Var_Pop_Order_By>;
  var_samp?: Maybe<Article_Var_Samp_Order_By>;
  variance?: Maybe<Article_Variance_Order_By>;
};

export type Article_Arr_Rel_Insert_Input = {
  data: Array<Article_Insert_Input>;
  on_conflict?: Maybe<Article_On_Conflict>;
};

export type Article_Avg_Fields = {
  __typename?: "article_avg_fields";
  author_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Article_Avg_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Article_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Article_Bool_Exp>>>;
  _not?: Maybe<Article_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Article_Bool_Exp>>>;
  article_tags?: Maybe<Article_Tag_Bool_Exp>;
  author?: Maybe<User_Bool_Exp>;
  author_user_id?: Maybe<Int_Comparison_Exp>;
  comments?: Maybe<Comment_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Article_Constraint {
  ArticlePkey = "article_pkey"
}

export type Article_Inc_Input = {
  author_user_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type Article_Insert_Input = {
  article_tags?: Maybe<Article_Tag_Arr_Rel_Insert_Input>;
  author?: Maybe<User_Obj_Rel_Insert_Input>;
  author_user_id?: Maybe<Scalars["Int"]>;
  comments?: Maybe<Comment_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

export type Article_Max_Fields = {
  __typename?: "article_max_fields";
  author_user_id?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

export type Article_Max_Order_By = {
  author_user_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Article_Min_Fields = {
  __typename?: "article_min_fields";
  author_user_id?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

export type Article_Min_Order_By = {
  author_user_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Article_Mutation_Response = {
  __typename?: "article_mutation_response";
  affected_rows: Scalars["Int"];
  returning: Array<Article>;
};

export type Article_Obj_Rel_Insert_Input = {
  data: Article_Insert_Input;
  on_conflict?: Maybe<Article_On_Conflict>;
};

export type Article_On_Conflict = {
  constraint: Article_Constraint;
  update_columns: Array<Article_Update_Column>;
  where?: Maybe<Article_Bool_Exp>;
};

export type Article_Order_By = {
  article_tags_aggregate?: Maybe<Article_Tag_Aggregate_Order_By>;
  author?: Maybe<User_Order_By>;
  author_user_id?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comment_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Article_Select_Column {
  AuthorUserId = "author_user_id",
  Content = "content",
  CreatedAt = "created_at",
  Id = "id",
  Title = "title",
  UpdatedAt = "updated_at"
}

export type Article_Set_Input = {
  author_user_id?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

export type Article_Stddev_Fields = {
  __typename?: "article_stddev_fields";
  author_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Article_Stddev_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Article_Stddev_Pop_Fields = {
  __typename?: "article_stddev_pop_fields";
  author_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Article_Stddev_Pop_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Article_Stddev_Samp_Fields = {
  __typename?: "article_stddev_samp_fields";
  author_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Article_Stddev_Samp_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Article_Sum_Fields = {
  __typename?: "article_sum_fields";
  author_user_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type Article_Sum_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Article_Tag = {
  __typename?: "article_tag";
  article: Article;
  article_id: Scalars["Int"];
  tag: Tag;
  tag_id: Scalars["Int"];
};

export type Article_Tag_Aggregate = {
  __typename?: "article_tag_aggregate";
  aggregate?: Maybe<Article_Tag_Aggregate_Fields>;
  nodes: Array<Article_Tag>;
};

export type Article_Tag_Aggregate_Fields = {
  __typename?: "article_tag_aggregate_fields";
  avg?: Maybe<Article_Tag_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Article_Tag_Max_Fields>;
  min?: Maybe<Article_Tag_Min_Fields>;
  stddev?: Maybe<Article_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Article_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Article_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Article_Tag_Sum_Fields>;
  var_pop?: Maybe<Article_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Article_Tag_Var_Samp_Fields>;
  variance?: Maybe<Article_Tag_Variance_Fields>;
};

export type Article_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Article_Tag_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

export type Article_Tag_Aggregate_Order_By = {
  avg?: Maybe<Article_Tag_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Article_Tag_Max_Order_By>;
  min?: Maybe<Article_Tag_Min_Order_By>;
  stddev?: Maybe<Article_Tag_Stddev_Order_By>;
  stddev_pop?: Maybe<Article_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Article_Tag_Stddev_Samp_Order_By>;
  sum?: Maybe<Article_Tag_Sum_Order_By>;
  var_pop?: Maybe<Article_Tag_Var_Pop_Order_By>;
  var_samp?: Maybe<Article_Tag_Var_Samp_Order_By>;
  variance?: Maybe<Article_Tag_Variance_Order_By>;
};

export type Article_Tag_Arr_Rel_Insert_Input = {
  data: Array<Article_Tag_Insert_Input>;
  on_conflict?: Maybe<Article_Tag_On_Conflict>;
};

export type Article_Tag_Avg_Fields = {
  __typename?: "article_tag_avg_fields";
  article_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

export type Article_Tag_Avg_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Article_Tag_Bool_Exp>>>;
  _not?: Maybe<Article_Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Article_Tag_Bool_Exp>>>;
  article?: Maybe<Article_Bool_Exp>;
  article_id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
};

export enum Article_Tag_Constraint {
  ArticleTagPkey = "article_tag_pkey"
}

export type Article_Tag_Inc_Input = {
  article_id?: Maybe<Scalars["Int"]>;
  tag_id?: Maybe<Scalars["Int"]>;
};

export type Article_Tag_Insert_Input = {
  article?: Maybe<Article_Obj_Rel_Insert_Input>;
  article_id?: Maybe<Scalars["Int"]>;
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars["Int"]>;
};

export type Article_Tag_Max_Fields = {
  __typename?: "article_tag_max_fields";
  article_id?: Maybe<Scalars["Int"]>;
  tag_id?: Maybe<Scalars["Int"]>;
};

export type Article_Tag_Max_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Min_Fields = {
  __typename?: "article_tag_min_fields";
  article_id?: Maybe<Scalars["Int"]>;
  tag_id?: Maybe<Scalars["Int"]>;
};

export type Article_Tag_Min_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Mutation_Response = {
  __typename?: "article_tag_mutation_response";
  affected_rows: Scalars["Int"];
  returning: Array<Article_Tag>;
};

export type Article_Tag_Obj_Rel_Insert_Input = {
  data: Article_Tag_Insert_Input;
  on_conflict?: Maybe<Article_Tag_On_Conflict>;
};

export type Article_Tag_On_Conflict = {
  constraint: Article_Tag_Constraint;
  update_columns: Array<Article_Tag_Update_Column>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type Article_Tag_Order_By = {
  article?: Maybe<Article_Order_By>;
  article_id?: Maybe<Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tag_id?: Maybe<Order_By>;
};

export enum Article_Tag_Select_Column {
  ArticleId = "article_id",
  TagId = "tag_id"
}

export type Article_Tag_Set_Input = {
  article_id?: Maybe<Scalars["Int"]>;
  tag_id?: Maybe<Scalars["Int"]>;
};

export type Article_Tag_Stddev_Fields = {
  __typename?: "article_tag_stddev_fields";
  article_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

export type Article_Tag_Stddev_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Stddev_Pop_Fields = {
  __typename?: "article_tag_stddev_pop_fields";
  article_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

export type Article_Tag_Stddev_Pop_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Stddev_Samp_Fields = {
  __typename?: "article_tag_stddev_samp_fields";
  article_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

export type Article_Tag_Stddev_Samp_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Sum_Fields = {
  __typename?: "article_tag_sum_fields";
  article_id?: Maybe<Scalars["Int"]>;
  tag_id?: Maybe<Scalars["Int"]>;
};

export type Article_Tag_Sum_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export enum Article_Tag_Update_Column {
  ArticleId = "article_id",
  TagId = "tag_id"
}

export type Article_Tag_Var_Pop_Fields = {
  __typename?: "article_tag_var_pop_fields";
  article_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

export type Article_Tag_Var_Pop_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Var_Samp_Fields = {
  __typename?: "article_tag_var_samp_fields";
  article_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

export type Article_Tag_Var_Samp_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export type Article_Tag_Variance_Fields = {
  __typename?: "article_tag_variance_fields";
  article_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

export type Article_Tag_Variance_Order_By = {
  article_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

export enum Article_Update_Column {
  AuthorUserId = "author_user_id",
  Content = "content",
  CreatedAt = "created_at",
  Id = "id",
  Title = "title",
  UpdatedAt = "updated_at"
}

export type Article_Var_Pop_Fields = {
  __typename?: "article_var_pop_fields";
  author_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Article_Var_Pop_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Article_Var_Samp_Fields = {
  __typename?: "article_var_samp_fields";
  author_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Article_Var_Samp_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Article_Variance_Fields = {
  __typename?: "article_variance_fields";
  author_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Article_Variance_Order_By = {
  author_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Comment = {
  __typename?: "comment";
  article: Article;
  article_id: Scalars["Int"];
  comment_user_id: Scalars["Int"];
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  text: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  user: User;
};

export type Comment_Aggregate = {
  __typename?: "comment_aggregate";
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

export type Comment_Aggregate_Fields = {
  __typename?: "comment_aggregate_fields";
  avg?: Maybe<Comment_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
  stddev?: Maybe<Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Sum_Fields>;
  var_pop?: Maybe<Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Var_Samp_Fields>;
  variance?: Maybe<Comment_Variance_Fields>;
};

export type Comment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comment_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

export type Comment_Aggregate_Order_By = {
  avg?: Maybe<Comment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Comment_Max_Order_By>;
  min?: Maybe<Comment_Min_Order_By>;
  stddev?: Maybe<Comment_Stddev_Order_By>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Order_By>;
  sum?: Maybe<Comment_Sum_Order_By>;
  var_pop?: Maybe<Comment_Var_Pop_Order_By>;
  var_samp?: Maybe<Comment_Var_Samp_Order_By>;
  variance?: Maybe<Comment_Variance_Order_By>;
};

export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
};

export type Comment_Avg_Fields = {
  __typename?: "comment_avg_fields";
  article_id?: Maybe<Scalars["Float"]>;
  comment_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Comment_Avg_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Comment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comment_Bool_Exp>>>;
  _not?: Maybe<Comment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Comment_Bool_Exp>>>;
  article?: Maybe<Article_Bool_Exp>;
  article_id?: Maybe<Int_Comparison_Exp>;
  comment_user_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

export enum Comment_Constraint {
  CommentPkey = "comment_pkey"
}

export type Comment_Inc_Input = {
  article_id?: Maybe<Scalars["Int"]>;
  comment_user_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type Comment_Insert_Input = {
  article?: Maybe<Article_Obj_Rel_Insert_Input>;
  article_id?: Maybe<Scalars["Int"]>;
  comment_user_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

export type Comment_Max_Fields = {
  __typename?: "comment_max_fields";
  article_id?: Maybe<Scalars["Int"]>;
  comment_user_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

export type Comment_Max_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Comment_Min_Fields = {
  __typename?: "comment_min_fields";
  article_id?: Maybe<Scalars["Int"]>;
  comment_user_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

export type Comment_Min_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Comment_Mutation_Response = {
  __typename?: "comment_mutation_response";
  affected_rows: Scalars["Int"];
  returning: Array<Comment>;
};

export type Comment_Obj_Rel_Insert_Input = {
  data: Comment_Insert_Input;
  on_conflict?: Maybe<Comment_On_Conflict>;
};

export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns: Array<Comment_Update_Column>;
  where?: Maybe<Comment_Bool_Exp>;
};

export type Comment_Order_By = {
  article?: Maybe<Article_Order_By>;
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

export enum Comment_Select_Column {
  ArticleId = "article_id",
  CommentUserId = "comment_user_id",
  CreatedAt = "created_at",
  Id = "id",
  Text = "text",
  UpdatedAt = "updated_at"
}

export type Comment_Set_Input = {
  article_id?: Maybe<Scalars["Int"]>;
  comment_user_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

export type Comment_Stddev_Fields = {
  __typename?: "comment_stddev_fields";
  article_id?: Maybe<Scalars["Float"]>;
  comment_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Comment_Stddev_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Comment_Stddev_Pop_Fields = {
  __typename?: "comment_stddev_pop_fields";
  article_id?: Maybe<Scalars["Float"]>;
  comment_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Comment_Stddev_Pop_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Comment_Stddev_Samp_Fields = {
  __typename?: "comment_stddev_samp_fields";
  article_id?: Maybe<Scalars["Float"]>;
  comment_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Comment_Stddev_Samp_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Comment_Sum_Fields = {
  __typename?: "comment_sum_fields";
  article_id?: Maybe<Scalars["Int"]>;
  comment_user_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type Comment_Sum_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Comment_Update_Column {
  ArticleId = "article_id",
  CommentUserId = "comment_user_id",
  CreatedAt = "created_at",
  Id = "id",
  Text = "text",
  UpdatedAt = "updated_at"
}

export type Comment_Var_Pop_Fields = {
  __typename?: "comment_var_pop_fields";
  article_id?: Maybe<Scalars["Float"]>;
  comment_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Comment_Var_Pop_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Comment_Var_Samp_Fields = {
  __typename?: "comment_var_samp_fields";
  article_id?: Maybe<Scalars["Float"]>;
  comment_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Comment_Var_Samp_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Comment_Variance_Fields = {
  __typename?: "comment_variance_fields";
  article_id?: Maybe<Scalars["Float"]>;
  comment_user_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Comment_Variance_Order_By = {
  article_id?: Maybe<Order_By>;
  comment_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

export type Mutation_Root = {
  __typename?: "mutation_root";
  delete_article?: Maybe<Article_Mutation_Response>;
  delete_article_tag?: Maybe<Article_Tag_Mutation_Response>;
  delete_comment?: Maybe<Comment_Mutation_Response>;
  delete_tag?: Maybe<Tag_Mutation_Response>;
  delete_user?: Maybe<User_Mutation_Response>;
  insert_article?: Maybe<Article_Mutation_Response>;
  insert_article_tag?: Maybe<Article_Tag_Mutation_Response>;
  insert_comment?: Maybe<Comment_Mutation_Response>;
  insert_tag?: Maybe<Tag_Mutation_Response>;
  insert_user?: Maybe<User_Mutation_Response>;
  update_article?: Maybe<Article_Mutation_Response>;
  update_article_tag?: Maybe<Article_Tag_Mutation_Response>;
  update_comment?: Maybe<Comment_Mutation_Response>;
  update_tag?: Maybe<Tag_Mutation_Response>;
  update_user?: Maybe<User_Mutation_Response>;
};

export type Mutation_RootDelete_ArticleArgs = {
  where: Article_Bool_Exp;
};

export type Mutation_RootDelete_Article_TagArgs = {
  where: Article_Tag_Bool_Exp;
};

export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};

export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp;
};

export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

export type Mutation_RootInsert_ArticleArgs = {
  objects: Array<Article_Insert_Input>;
  on_conflict?: Maybe<Article_On_Conflict>;
};

export type Mutation_RootInsert_Article_TagArgs = {
  objects: Array<Article_Tag_Insert_Input>;
  on_conflict?: Maybe<Article_Tag_On_Conflict>;
};

export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: Maybe<Comment_On_Conflict>;
};

export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>;
  on_conflict?: Maybe<Tag_On_Conflict>;
};

export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type Mutation_RootUpdate_ArticleArgs = {
  _inc?: Maybe<Article_Inc_Input>;
  _set?: Maybe<Article_Set_Input>;
  where: Article_Bool_Exp;
};

export type Mutation_RootUpdate_Article_TagArgs = {
  _inc?: Maybe<Article_Tag_Inc_Input>;
  _set?: Maybe<Article_Tag_Set_Input>;
  where: Article_Tag_Bool_Exp;
};

export type Mutation_RootUpdate_CommentArgs = {
  _inc?: Maybe<Comment_Inc_Input>;
  _set?: Maybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};

export type Mutation_RootUpdate_TagArgs = {
  _inc?: Maybe<Tag_Inc_Input>;
  _set?: Maybe<Tag_Set_Input>;
  where: Tag_Bool_Exp;
};

export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

export enum Order_By {
  Asc = "asc",
  AscNullsFirst = "asc_nulls_first",
  AscNullsLast = "asc_nulls_last",
  Desc = "desc",
  DescNullsFirst = "desc_nulls_first",
  DescNullsLast = "desc_nulls_last"
}

export type Query_Root = {
  __typename?: "query_root";
  article: Array<Article>;
  article_aggregate: Article_Aggregate;
  article_by_pk?: Maybe<Article>;
  article_tag: Array<Article_Tag>;
  article_tag_aggregate: Article_Tag_Aggregate;
  article_tag_by_pk?: Maybe<Article_Tag>;
  comment: Array<Comment>;
  comment_aggregate: Comment_Aggregate;
  comment_by_pk?: Maybe<Comment>;
  tag: Array<Tag>;
  tag_aggregate: Tag_Aggregate;
  tag_by_pk?: Maybe<Tag>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
};

export type Query_RootArticleArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};

export type Query_RootArticle_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};

export type Query_RootArticle_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootArticle_TagArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type Query_RootArticle_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type Query_RootArticle_Tag_By_PkArgs = {
  article_id: Scalars["Int"];
  tag_id: Scalars["Int"];
};

export type Query_RootCommentArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};

export type Query_RootComment_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};

export type Query_RootComment_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type Query_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type Query_RootTag_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars["Int"];
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  article: Array<Article>;
  article_aggregate: Article_Aggregate;
  article_by_pk?: Maybe<Article>;
  article_tag: Array<Article_Tag>;
  article_tag_aggregate: Article_Tag_Aggregate;
  article_tag_by_pk?: Maybe<Article_Tag>;
  comment: Array<Comment>;
  comment_aggregate: Comment_Aggregate;
  comment_by_pk?: Maybe<Comment>;
  tag: Array<Tag>;
  tag_aggregate: Tag_Aggregate;
  tag_by_pk?: Maybe<Tag>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
};

export type Subscription_RootArticleArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};

export type Subscription_RootArticle_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};

export type Subscription_RootArticle_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootArticle_TagArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type Subscription_RootArticle_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type Subscription_RootArticle_Tag_By_PkArgs = {
  article_id: Scalars["Int"];
  tag_id: Scalars["Int"];
};

export type Subscription_RootCommentArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};

export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: Maybe<Array<Comment_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Comment_Order_By>>;
  where?: Maybe<Comment_Bool_Exp>;
};

export type Subscription_RootComment_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type Subscription_RootTag_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["Int"];
};

export type Tag = {
  __typename?: "tag";
  for_ignore_update?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  label: Scalars["String"];
  tag_articles: Array<Article_Tag>;
  tag_articles_aggregate: Article_Tag_Aggregate;
};

export type TagTag_ArticlesArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type TagTag_Articles_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Tag_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Tag_Order_By>>;
  where?: Maybe<Article_Tag_Bool_Exp>;
};

export type Tag_Aggregate = {
  __typename?: "tag_aggregate";
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

export type Tag_Aggregate_Fields = {
  __typename?: "tag_aggregate_fields";
  avg?: Maybe<Tag_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
  stddev?: Maybe<Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Sum_Fields>;
  var_pop?: Maybe<Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Var_Samp_Fields>;
  variance?: Maybe<Tag_Variance_Fields>;
};

export type Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

export type Tag_Aggregate_Order_By = {
  avg?: Maybe<Tag_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Max_Order_By>;
  min?: Maybe<Tag_Min_Order_By>;
  stddev?: Maybe<Tag_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Sum_Order_By>;
  var_pop?: Maybe<Tag_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Variance_Order_By>;
};

export type Tag_Arr_Rel_Insert_Input = {
  data: Array<Tag_Insert_Input>;
  on_conflict?: Maybe<Tag_On_Conflict>;
};

export type Tag_Avg_Fields = {
  __typename?: "tag_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Tag_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  _not?: Maybe<Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  for_ignore_update?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  tag_articles?: Maybe<Article_Tag_Bool_Exp>;
};

export enum Tag_Constraint {
  TagLabelKey = "tag_label_key",
  TagPkey = "tag_pkey"
}

export type Tag_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

export type Tag_Insert_Input = {
  for_ignore_update?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
  tag_articles?: Maybe<Article_Tag_Arr_Rel_Insert_Input>;
};

export type Tag_Max_Fields = {
  __typename?: "tag_max_fields";
  for_ignore_update?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
};

export type Tag_Max_Order_By = {
  for_ignore_update?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
};

export type Tag_Min_Fields = {
  __typename?: "tag_min_fields";
  for_ignore_update?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
};

export type Tag_Min_Order_By = {
  for_ignore_update?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
};

export type Tag_Mutation_Response = {
  __typename?: "tag_mutation_response";
  affected_rows: Scalars["Int"];
  returning: Array<Tag>;
};

export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input;
  on_conflict?: Maybe<Tag_On_Conflict>;
};

export type Tag_On_Conflict = {
  constraint: Tag_Constraint;
  update_columns: Array<Tag_Update_Column>;
  where?: Maybe<Tag_Bool_Exp>;
};

export type Tag_Order_By = {
  for_ignore_update?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  tag_articles_aggregate?: Maybe<Article_Tag_Aggregate_Order_By>;
};

export enum Tag_Select_Column {
  ForIgnoreUpdate = "for_ignore_update",
  Id = "id",
  Label = "label"
}

export type Tag_Set_Input = {
  for_ignore_update?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  label?: Maybe<Scalars["String"]>;
};

export type Tag_Stddev_Fields = {
  __typename?: "tag_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Tag_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Tag_Stddev_Pop_Fields = {
  __typename?: "tag_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Tag_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Tag_Stddev_Samp_Fields = {
  __typename?: "tag_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Tag_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Tag_Sum_Fields = {
  __typename?: "tag_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

export type Tag_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Tag_Update_Column {
  ForIgnoreUpdate = "for_ignore_update",
  Id = "id",
  Label = "label"
}

export type Tag_Var_Pop_Fields = {
  __typename?: "tag_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Tag_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Tag_Var_Samp_Fields = {
  __typename?: "tag_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Tag_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Tag_Variance_Fields = {
  __typename?: "tag_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type Tag_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

export type User = {
  __typename?: "user";
  articles: Array<Article>;
  articles_aggregate: Article_Aggregate;
  email: Scalars["String"];
  id: Scalars["Int"];
  name: Scalars["String"];
  password: Scalars["String"];
  role: Scalars["String"];
  salt: Scalars["String"];
};

export type UserArticlesArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};

export type UserArticles_AggregateArgs = {
  distinct_on?: Maybe<Array<Article_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Article_Order_By>>;
  where?: Maybe<Article_Bool_Exp>;
};

export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};

export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_Avg_Fields = {
  __typename?: "user_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  articles?: Maybe<Article_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  salt?: Maybe<String_Comparison_Exp>;
};

export enum User_Constraint {
  UserEmailKey = "user_email_key",
  UserPkey = "user_pkey"
}

export type User_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

export type User_Insert_Input = {
  articles?: Maybe<Article_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
};

export type User_Max_Fields = {
  __typename?: "user_max_fields";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
};

export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
};

export type User_Min_Fields = {
  __typename?: "user_min_fields";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
};

export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
};

export type User_Mutation_Response = {
  __typename?: "user_mutation_response";
  affected_rows: Scalars["Int"];
  returning: Array<User>;
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

export type User_Order_By = {
  articles_aggregate?: Maybe<Article_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  salt?: Maybe<Order_By>;
};

export enum User_Select_Column {
  Email = "email",
  Id = "id",
  Name = "name",
  Password = "password",
  Role = "role",
  Salt = "salt"
}

export type User_Set_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  salt?: Maybe<Scalars["String"]>;
};

export type User_Stddev_Fields = {
  __typename?: "user_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Stddev_Pop_Fields = {
  __typename?: "user_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Stddev_Samp_Fields = {
  __typename?: "user_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Sum_Fields = {
  __typename?: "user_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum User_Update_Column {
  Email = "email",
  Id = "id",
  Name = "name",
  Password = "password",
  Role = "role",
  Salt = "salt"
}

export type User_Var_Pop_Fields = {
  __typename?: "user_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Var_Samp_Fields = {
  __typename?: "user_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Variance_Fields = {
  __typename?: "user_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type UpdateCommentMutationVariables = {
  id: Scalars["Int"];
  text: Scalars["String"];
};

export type UpdateCommentMutation = { __typename?: "mutation_root" } & {
  update_comment: Maybe<
    { __typename?: "comment_mutation_response" } & Pick<
      Comment_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type DeleteCommentMutationVariables = {
  id: Scalars["Int"];
};

export type DeleteCommentMutation = { __typename?: "mutation_root" } & {
  delete_comment: Maybe<
    { __typename?: "comment_mutation_response" } & Pick<
      Comment_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type GetArticleDetailQueryVariables = {
  id: Scalars["Int"];
};

export type GetArticleDetailQuery = { __typename?: "query_root" } & {
  article: Array<
    { __typename?: "article" } & Pick<
      Article,
      "id" | "title" | "content" | "author_user_id" | "created_at"
    > & {
        author: { __typename?: "user" } & Pick<User, "name">;
        article_tags: Array<
          { __typename?: "article_tag" } & {
            tag: { __typename?: "tag" } & Pick<Tag, "id" | "label">;
          }
        >;
        comments: Array<
          { __typename?: "comment" } & Pick<
            Comment,
            "id" | "text" | "created_at" | "updated_at"
          > & { user: { __typename?: "user" } & Pick<User, "id" | "name"> }
        >;
      }
  >;
};

export type DeleteArticleMutationVariables = {
  id: Scalars["Int"];
};

export type DeleteArticleMutation = { __typename?: "mutation_root" } & {
  delete_article: Maybe<
    { __typename?: "article_mutation_response" } & Pick<
      Article_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type AddCommentMutationVariables = {
  article_id: Scalars["Int"];
  text: Scalars["String"];
};

export type AddCommentMutation = { __typename?: "mutation_root" } & {
  insert_comment: Maybe<
    { __typename?: "comment_mutation_response" } & Pick<
      Comment_Mutation_Response,
      "affected_rows"
    > & {
        returning: Array<
          { __typename?: "comment" } & Pick<
            Comment,
            "id" | "text" | "created_at" | "updated_at"
          > & { user: { __typename?: "user" } & Pick<User, "id" | "name"> }
        >;
      }
  >;
};

export type GetArticleDetailForEditQueryVariables = {
  id: Scalars["Int"];
};

export type GetArticleDetailForEditQuery = { __typename?: "query_root" } & {
  article: Array<
    { __typename?: "article" } & Pick<Article, "title" | "content"> & {
        article_tags: Array<
          { __typename?: "article_tag" } & {
            tag: { __typename?: "tag" } & Pick<Tag, "label">;
          }
        >;
      }
  >;
};

export type UpdateArticleMutationVariables = {
  id: Scalars["Int"];
  title: Scalars["String"];
  content: Scalars["String"];
  tags: Array<Article_Tag_Insert_Input>;
};

export type UpdateArticleMutation = { __typename?: "mutation_root" } & {
  update_article: Maybe<
    { __typename?: "article_mutation_response" } & Pick<
      Article_Mutation_Response,
      "affected_rows"
    >
  >;
  delete_article_tag: Maybe<
    { __typename?: "article_tag_mutation_response" } & Pick<
      Article_Tag_Mutation_Response,
      "affected_rows"
    >
  >;
  insert_article_tag: Maybe<
    { __typename?: "article_tag_mutation_response" } & Pick<
      Article_Tag_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type AddArticleMutationVariables = {
  title: Scalars["String"];
  content: Scalars["String"];
  tags: Array<Article_Tag_Insert_Input>;
};

export type AddArticleMutation = { __typename?: "mutation_root" } & {
  insert_article: Maybe<
    { __typename?: "article_mutation_response" } & Pick<
      Article_Mutation_Response,
      "affected_rows"
    > & { returning: Array<{ __typename?: "article" } & Pick<Article, "id">> }
  >;
};

export type GetNewArticlesQueryVariables = {};

export type GetNewArticlesQuery = { __typename?: "query_root" } & {
  article: Array<
    { __typename?: "article" } & Pick<
      Article,
      "id" | "title" | "content" | "author_user_id" | "created_at"
    > & { author: { __typename?: "user" } & Pick<User, "name"> }
  >;
};

export const UpdateCommentDocument = gql`
  mutation UpdateComment($id: Int!, $text: String!) {
    update_comment(where: { id: { _eq: $id } }, _set: { text: $text }) {
      affected_rows
    }
  }
`;
export type UpdateCommentMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCommentMutation,
  UpdateCommentMutationVariables
>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useUpdateCommentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >(UpdateCommentDocument, baseOptions);
}
export type UpdateCommentMutationHookResult = ReturnType<
  typeof useUpdateCommentMutation
>;
export type UpdateCommentMutationResult = ApolloReactCommon.MutationResult<
  UpdateCommentMutation
>;
export type UpdateCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCommentMutation,
  UpdateCommentMutationVariables
>;
export const DeleteCommentDocument = gql`
  mutation DeleteComment($id: Int!) {
    delete_comment(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
export type DeleteCommentMutationFn = ApolloReactCommon.MutationFunction<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(DeleteCommentDocument, baseOptions);
}
export type DeleteCommentMutationHookResult = ReturnType<
  typeof useDeleteCommentMutation
>;
export type DeleteCommentMutationResult = ApolloReactCommon.MutationResult<
  DeleteCommentMutation
>;
export type DeleteCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteCommentMutation,
  DeleteCommentMutationVariables
>;
export const GetArticleDetailDocument = gql`
  query GetArticleDetail($id: Int!) {
    article(where: { id: { _eq: $id } }) {
      id
      title
      content
      author_user_id
      created_at
      author {
        name
      }
      article_tags {
        tag {
          id
          label
        }
      }
      comments(order_by: { created_at: asc }) {
        id
        text
        created_at
        updated_at
        user {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useGetArticleDetailQuery__
 *
 * To run a query within a React component, call `useGetArticleDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleDetailQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetArticleDetailQuery,
    GetArticleDetailQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetArticleDetailQuery,
    GetArticleDetailQueryVariables
  >(GetArticleDetailDocument, baseOptions);
}
export function useGetArticleDetailLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetArticleDetailQuery,
    GetArticleDetailQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetArticleDetailQuery,
    GetArticleDetailQueryVariables
  >(GetArticleDetailDocument, baseOptions);
}
export type GetArticleDetailQueryHookResult = ReturnType<
  typeof useGetArticleDetailQuery
>;
export type GetArticleDetailLazyQueryHookResult = ReturnType<
  typeof useGetArticleDetailLazyQuery
>;
export type GetArticleDetailQueryResult = ApolloReactCommon.QueryResult<
  GetArticleDetailQuery,
  GetArticleDetailQueryVariables
>;
export const DeleteArticleDocument = gql`
  mutation DeleteArticle($id: Int!) {
    delete_article(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
export type DeleteArticleMutationFn = ApolloReactCommon.MutationFunction<
  DeleteArticleMutation,
  DeleteArticleMutationVariables
>;

/**
 * __useDeleteArticleMutation__
 *
 * To run a mutation, you first call `useDeleteArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArticleMutation, { data, loading, error }] = useDeleteArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArticleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteArticleMutation,
    DeleteArticleMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteArticleMutation,
    DeleteArticleMutationVariables
  >(DeleteArticleDocument, baseOptions);
}
export type DeleteArticleMutationHookResult = ReturnType<
  typeof useDeleteArticleMutation
>;
export type DeleteArticleMutationResult = ApolloReactCommon.MutationResult<
  DeleteArticleMutation
>;
export type DeleteArticleMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteArticleMutation,
  DeleteArticleMutationVariables
>;
export const AddCommentDocument = gql`
  mutation AddComment($article_id: Int!, $text: String!) {
    insert_comment(objects: { article_id: $article_id, text: $text }) {
      affected_rows
      returning {
        id
        text
        created_at
        updated_at
        user {
          id
          name
        }
      }
    }
  }
`;
export type AddCommentMutationFn = ApolloReactCommon.MutationFunction<
  AddCommentMutation,
  AddCommentMutationVariables
>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      article_id: // value for 'article_id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useAddCommentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddCommentMutation,
    AddCommentMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddCommentMutation,
    AddCommentMutationVariables
  >(AddCommentDocument, baseOptions);
}
export type AddCommentMutationHookResult = ReturnType<
  typeof useAddCommentMutation
>;
export type AddCommentMutationResult = ApolloReactCommon.MutationResult<
  AddCommentMutation
>;
export type AddCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddCommentMutation,
  AddCommentMutationVariables
>;
export const GetArticleDetailForEditDocument = gql`
  query GetArticleDetailForEdit($id: Int!) {
    article(where: { id: { _eq: $id } }) {
      title
      content
      article_tags {
        tag {
          label
        }
      }
    }
  }
`;

/**
 * __useGetArticleDetailForEditQuery__
 *
 * To run a query within a React component, call `useGetArticleDetailForEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleDetailForEditQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleDetailForEditQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArticleDetailForEditQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetArticleDetailForEditQuery,
    GetArticleDetailForEditQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetArticleDetailForEditQuery,
    GetArticleDetailForEditQueryVariables
  >(GetArticleDetailForEditDocument, baseOptions);
}
export function useGetArticleDetailForEditLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetArticleDetailForEditQuery,
    GetArticleDetailForEditQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetArticleDetailForEditQuery,
    GetArticleDetailForEditQueryVariables
  >(GetArticleDetailForEditDocument, baseOptions);
}
export type GetArticleDetailForEditQueryHookResult = ReturnType<
  typeof useGetArticleDetailForEditQuery
>;
export type GetArticleDetailForEditLazyQueryHookResult = ReturnType<
  typeof useGetArticleDetailForEditLazyQuery
>;
export type GetArticleDetailForEditQueryResult = ApolloReactCommon.QueryResult<
  GetArticleDetailForEditQuery,
  GetArticleDetailForEditQueryVariables
>;
export const UpdateArticleDocument = gql`
  mutation UpdateArticle(
    $id: Int!
    $title: String!
    $content: String!
    $tags: [article_tag_insert_input!]!
  ) {
    update_article(
      where: { id: { _eq: $id } }
      _set: { title: $title, content: $content }
    ) {
      affected_rows
    }
    delete_article_tag(where: { article_id: { _eq: $id } }) {
      affected_rows
    }
    insert_article_tag(
      objects: $tags
      on_conflict: { constraint: article_tag_pkey, update_columns: [] }
    ) {
      affected_rows
    }
  }
`;
export type UpdateArticleMutationFn = ApolloReactCommon.MutationFunction<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
>;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArticleMutation, { data, loading, error }] = useUpdateArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useUpdateArticleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >(UpdateArticleDocument, baseOptions);
}
export type UpdateArticleMutationHookResult = ReturnType<
  typeof useUpdateArticleMutation
>;
export type UpdateArticleMutationResult = ApolloReactCommon.MutationResult<
  UpdateArticleMutation
>;
export type UpdateArticleMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
>;
export const AddArticleDocument = gql`
  mutation AddArticle(
    $title: String!
    $content: String!
    $tags: [article_tag_insert_input!]!
  ) {
    insert_article(
      objects: {
        title: $title
        content: $content
        article_tags: { data: $tags }
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
export type AddArticleMutationFn = ApolloReactCommon.MutationFunction<
  AddArticleMutation,
  AddArticleMutationVariables
>;

/**
 * __useAddArticleMutation__
 *
 * To run a mutation, you first call `useAddArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArticleMutation, { data, loading, error }] = useAddArticleMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useAddArticleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddArticleMutation,
    AddArticleMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddArticleMutation,
    AddArticleMutationVariables
  >(AddArticleDocument, baseOptions);
}
export type AddArticleMutationHookResult = ReturnType<
  typeof useAddArticleMutation
>;
export type AddArticleMutationResult = ApolloReactCommon.MutationResult<
  AddArticleMutation
>;
export type AddArticleMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddArticleMutation,
  AddArticleMutationVariables
>;
export const GetNewArticlesDocument = gql`
  query GetNewArticles {
    article(order_by: { created_at: desc }) {
      id
      title
      content
      author_user_id
      created_at
      author {
        name
      }
    }
  }
`;

/**
 * __useGetNewArticlesQuery__
 *
 * To run a query within a React component, call `useGetNewArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewArticlesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetNewArticlesQuery,
    GetNewArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetNewArticlesQuery,
    GetNewArticlesQueryVariables
  >(GetNewArticlesDocument, baseOptions);
}
export function useGetNewArticlesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetNewArticlesQuery,
    GetNewArticlesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetNewArticlesQuery,
    GetNewArticlesQueryVariables
  >(GetNewArticlesDocument, baseOptions);
}
export type GetNewArticlesQueryHookResult = ReturnType<
  typeof useGetNewArticlesQuery
>;
export type GetNewArticlesLazyQueryHookResult = ReturnType<
  typeof useGetNewArticlesLazyQuery
>;
export type GetNewArticlesQueryResult = ApolloReactCommon.QueryResult<
  GetNewArticlesQuery,
  GetNewArticlesQueryVariables
>;
