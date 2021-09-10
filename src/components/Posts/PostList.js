import { React, Component } from "react";
import { Container } from "react-bootstrap";
import PostItem from "../PostItem/PostItem";

class PostsList extends Component {
  state = {};

  async componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <Container className="m-5">
        {posts.map((item, index) => (
          <PostItem key={index} {...item} />
        ))}
      </Container>
    );
  }
}

export default PostsList;
