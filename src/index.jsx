import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks'
import App from './App';
import client from './components/demo/api/index'
/*
// import axios from 'axios';
// import { FlagsProvider } from 'react-feature-flags';

(async () => {
    ReactDOM.render(
      <ApolloProvider client={client}>
        <FlagsProvider value={[]}>
          <App />
        </FlagsProvider>,
      </ApolloProvider>,
      document.getElementById('root'));
  }
)();
 */

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root'));

