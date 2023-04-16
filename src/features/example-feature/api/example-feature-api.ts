import axios from "axios";

import {API_URL} from "@/config"

export const exampleFeatureApi = async (queryTerm:string) => {
  try {
    const response = await axios.get(`${API_URL}?q=${queryTerm}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const exampleFeatureFetchApi = (queryTerm:string) => {
  const options = {
    method: "GET",
    headers: {
      "API-Key": "example-api-key-if-needed-in-header",
    },
  };
  fetch(`${API_URL}?q=${queryTerm}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));
};
