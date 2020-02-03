import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { apolloClient } from "./index";
import { AuthProvider } from "./utils/auth";

export const AppProviders: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Router>{children}</Router>
      </AuthProvider>
    </ApolloProvider>
  );
};
