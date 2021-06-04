import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import client from './graphql/client';
import Root from './components/Root/Root';
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*  @ts-ignore */}
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
