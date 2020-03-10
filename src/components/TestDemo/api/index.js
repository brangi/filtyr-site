import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql'
});
export default client