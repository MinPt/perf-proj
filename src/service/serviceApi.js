import axios from "axios";

export const apiEndpoint = "https://jsonplaceholder.typicode.com/";

class ServiceApi {
  constructor(apiEndpoint) {
    this.api = axios.create({
      baseURL: apiEndpoint,
    });
  }
}

export default new ServiceApi(apiEndpoint).api;
