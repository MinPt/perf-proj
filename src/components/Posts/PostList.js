import { React, Component } from "react";
import { Container } from "react-bootstrap";
import PostItem from "../PostItem/PostItem";
import { debounce } from "lodash";

class PostsList extends Component {
  state = {
    posts: [],
    page: 0,
  };

  async componentDidMount() {
    await this.props.onLoad();

    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.loadPosts();
      }
    }, 100);
    this.loadPosts();
  }

  loadPosts = () => {
    const posts = this.props.posts.slice(
      this.state.page * 100,
      this.state.page * 100 + 100
    );
    console.log(posts, this.state.posts);
    const statePosts = this.state.posts;
    statePosts.push(...posts);
    this.setState({ posts: statePosts, page: this.state.page + 1 });
  };

  onDelete = (id) => {
    const postsToFilter = this.state.posts;
    const posts = postsToFilter.filter((item) => item.id !== id);
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;
    return (
      <Container className="m-5">
        {posts.map((item) => (
          <PostItem key={item.id} {...item} onDelete={this.onDelete} />
        ))}
      </Container>
    );
  }
}

export default PostsList;
