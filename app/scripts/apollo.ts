import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";

export const APOLLO_CLIENT_FOR_SCRIPTS = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:8080/v1/graphql",
    fetch: fetch as any,
    headers: {
      "x-hasura-admin-secret": "myadminsecretkey"
    }
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
});
