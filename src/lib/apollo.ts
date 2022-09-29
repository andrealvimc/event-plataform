import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oeoilc207h01xmc1kufn5u/master',
  cache: new InMemoryCache()
});