import {
  ApolloClient, ApolloLink, InMemoryCache, HttpLink,
} from 'apollo-boost';

const httpUrl = 'http://localhost:3000/api/query';

const httpLink = ApolloLink.from([
  new ApolloLink((operation, forward) => {
    return forward(operation);
  }),
  new HttpLink({uri: httpUrl})
]);


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
  defaultOptions: {query: {fetchPolicy: 'no-cache'}}
});

export default client;
