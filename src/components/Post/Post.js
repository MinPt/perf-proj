import { Container } from "react-bootstrap";

const Post = (post) => {
  const { title, body } = post;

  return (
    <Container>
      <Container>
        <h4>{title}</h4>
        <p>{body}</p>
      </Container>
    </Container>
  );
};

export default Post;
