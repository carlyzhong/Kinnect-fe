import CommentCard from "../Cards/CommentCard";

export default function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment.comment_id} />
      ))}
    </>
  );
}
