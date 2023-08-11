import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../client";
import { QUERYKEYS } from "../constants";

const fetchProducts = async () => {
  const response = await apiClient.get("packages/lowest");
  return response.data;
};

export const useFetchProducts = () => {
  return useQuery([QUERYKEYS.GETALLPRODUCT], fetchProducts);
};
