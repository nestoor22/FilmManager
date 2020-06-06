import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';

import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';
import theme from './theme';
import { URI } from './config';
import rootReducer from './reducers';

import { SnackbarProvider } from 'notistack';
import ConfirmProvider from './providers/ConfirmProvider';

const store = createStore(rootReducer);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) => {
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
          if (message === 'User is not logged in') {
            window.location = `/signIn`;
          }
        });
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    createUploadLink({ uri: URI, credentials: 'include' }),
    new HttpLink({
      uri: URI,
      credentials: 'include',
    }),
  ]),

  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConfirmProvider>
            <SnackbarProvider
              autoHideDuration={3000}
              maxSnack={1}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Routes />
            </SnackbarProvider>
          </ConfirmProvider>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
