import api from "../serviceApi";
import CommentsApi from "./comments";
import reindexArray from "../../helper/reindexArray";
import mapCommentsToPosts from "../../helper/mapCommentsToPosts";

class PostsApi {
  constructor(api) {
    this.api = api;
  }

  async getPosts() {
    const promises = await Promise.all([
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
      this.api.get(`posts`),
    ]);
    const postsArray = promises.map((item) => item.data);
    const comments = await CommentsApi.getComments();
    const reindexedArray = reindexArray(postsArray);
    const postsWithComments = mapCommentsToPosts(reindexedArray, comments);
    return postsWithComments;
  }
}

export default new PostsApi(api);
