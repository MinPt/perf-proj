import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postsSlice } from "../../store/postsSlice";
import { memo } from "react";

const PostItem = ({ title, body, id, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <Container className="border">
      <div className="d-flex justify-content-between">
        <h4>{title}</h4>
        <Button
          onClick={() => {
            dispatch(postsSlice.actions.delete(id));
            onDelete(id);
          }}
          variant="danger"
          className="m-2"
        >
          Delete
        </Button>
      </div>
      <p>{body}</p>
    </Container>
  );
};

export default memo(PostItem);
