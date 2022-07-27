import { gql } from "@apollo/client";

interface Params {
  skip: number;
  take: number;
}

export const getProductsQuery = () => gql`
  query Products {
    products(first: 10) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                altText
                url
              }
            }
          }
        }
      }
    }
  }
`;
