import { connect } from "react-redux";
import { getPosts } from "../../store/postsSlice";
import PostsList from "./PostList";
import { postsSlice } from "../../store/postsSlice";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(getPosts()),
    editPost: (post) => dispatch(postsSlice.actions.edit(post)),
    deletePost: (post) => dispatch(postsSlice.actions.delete(post)),
  };
};

export const PostsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
