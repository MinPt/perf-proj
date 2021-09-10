import api from "../serviceApi";

class PostsApi {
  constructor(api) {
    this.api = api;
  }

  async getComments() {
    const { data } = await this.api.get(`comments`);

    return data;
  }
}

export default new PostsApi(api);
