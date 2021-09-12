export default function mapCommentsToPosts(postsArray, commentsArray) {
  const MapCommentsToPosts = new Map();
  try {
    commentsArray.forEach((comment) => {
      if (MapCommentsToPosts.has(comment.postId)) {
        MapCommentsToPosts.get(comment.postId).push(comment);
      } else {
        MapCommentsToPosts.set(comment.postId, [{ ...comment }]);
      }
    });

    const postsWithComments = postsArray.map((item) => {
      const newItem = { ...item };
      newItem.comments = MapCommentsToPosts.get(item.oldId);
      return newItem;
    });
    return postsWithComments;
  } catch (error) {
    alert(error);
  }
}
