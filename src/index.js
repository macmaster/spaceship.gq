import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { HashRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { Pages } from './pages';
import { theme } from './theme';
import { client } from './client';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

function App(props) {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Pages />
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
}
