import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks'
import App from './App';
import client from './components/demo/api/index'
import axios from 'axios';
import { FlagsProvider } from 'react-feature-flags';

(async () => {
  console.log(process.env)
  const response = await axios({ url: '', method: 'get' });
  console.log({response})
    ReactDOM.render(
      <ApolloProvider client={client}>
        <FlagsProvider value={[]}>
          <App />
        </FlagsProvider>,
      </ApolloProvider>,
      document.getElementById('root'));
  }
)();

