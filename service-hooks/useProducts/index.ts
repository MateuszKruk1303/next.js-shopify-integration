import { PRODUCTS_QUERY } from "./query";
import { gql, useQuery } from "@apollo/client";

const dataProcessor = ({ products: { edges } }: any) => {
  return edges.map(({ node: { title, priceRange, images } }: any) => ({
    title,
    image: images.edges[0].node.url,
    amount: parseFloat(priceRange.minVariantPrice.amount),
  }));
};

const useProducts = async () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (error) return { loading, error, data: null };
};

export { useProducts };
