import Axios from "axios";

import localStorageHelpers from "@/utils/local-storage-helpers";
import { API_URL } from "@/config";

function authRequestInterceptor(config:any) {
  const token = localStorageHelpers.getToken("auth");
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);
    return Promise.reject(error);
  }
);
