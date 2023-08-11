import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.openbonnet.com/v2/api/",
  responseType: "json",
});

export { apiClient };
