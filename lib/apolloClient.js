import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const createApolloClient = () => {  
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL,
    }),
    cache: new InMemoryCache(),
  });
}

export const apolloClient = createApolloClient();
