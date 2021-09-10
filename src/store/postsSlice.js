import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostsApi from "./../service/entities/posts";

const initialState = [];

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await PostsApi.getPosts();
  return posts;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    edit: (posts, action) => {
      const index = posts.findIndex((post) => post.id === action.payload.id);
      posts[index] = action.payload;
      return posts;
    },

    delete: (posts, action) => {
      return posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (posts, action) => {
      posts = action.payload;
      return posts;
    },
  },
});
