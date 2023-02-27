import { useState, useEffect } from "react";

import { exampleFeatureApi } from "../api/example-feature-api";

export const useSearch = (searchQuery) => {
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
