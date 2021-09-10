import api from "../serviceApi";
import CommentsApi from "./comments";
import reindexArray from "../../helper/reindexArray";
import mapCommentsToPosts from "../../helper/mapCommentsToPosts";

class PostsApi {
  constructor(api) {
    this.api = api;
  }

  async getPosts() {
    const postsArray = [];    

    for (let i = 0; i < 10; i++) {
      const { data } = await this.api.get(`posts`);
      postsArray.push(data);
    }
    const comments = await CommentsApi.getComments();
    const reindexedArray = reindexArray(postsArray);
    const postsWithComments = mapCommentsToPosts(reindexedArray, comments);
    return postsWithComments;
  }
}

export default new PostsApi(api);
