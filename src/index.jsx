import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks'
import App from './App';
import client from './components/TestDemo/api/index'

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById('root'));
