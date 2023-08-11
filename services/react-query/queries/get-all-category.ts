import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../client";
import { QUERYKEYS } from "../constants";

const fetchJourneyCategories = async () => {
  const response = await apiClient.get("journey-categories");
  return response.data;
};

export const useJourneyCategories = () => {
  return useQuery([QUERYKEYS.GETALLCATEGORY], fetchJourneyCategories);
};
