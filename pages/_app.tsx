import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  //Initialization of GraphQL client with keys from shopify.
  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GQL_API_URL as string,
    cache: new InMemoryCache(),
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env
        .NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN as string,
    },
  });

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
