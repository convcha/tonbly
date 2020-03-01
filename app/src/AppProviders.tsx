import { ApolloProvider } from "@apollo/react-hooks";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { apolloClient } from "./index";
import theme from "./theme";
import { AuthProvider } from "./utils/auth";

export const AppProviders: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
};
