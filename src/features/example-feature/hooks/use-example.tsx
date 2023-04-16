import { useState, useEffect } from "react";

import { exampleFeatureApi } from "@/features/example-feature/api/example-feature-api";

export const useExample = (searchQuery:string) => {
  const [searchResponse, setSearchResponse] = useState({
    searchResults: null,
  });

  useEffect(() => {
    async function getSearchResults() {
      const response = await exampleFeatureApi(searchQuery);
      setSearchResponse(response);
    }
    getSearchResults();
  }, [searchQuery]);

  return searchResponse;
};