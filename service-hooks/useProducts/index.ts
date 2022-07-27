import { getProductsQuery } from "./query";
import { gql, useQuery } from "@apollo/client";

interface ProductOfList {
  name: string;
  image: string;
  amount: number;
  currencyCode: string;
}

const dataProcessor = ({ products: { edges } }: any): ProductOfList[] => {
  return edges.map(({ node: { title, priceRange, images } }: any) => ({
    name: title,
    image: images.edges[0].node.url,
    amount: parseFloat(priceRange.minVariantPrice.amount),
    currencyCode: priceRange.minVariantPrice.currencyCode,
  }));
};

const useProducts = () => {
  const { loading, error, data } = useQuery(getProductsQuery());

  if (error || !data) return { data: [], loading, error };

  return { data: dataProcessor(data), error, loading };
};

export { useProducts };
