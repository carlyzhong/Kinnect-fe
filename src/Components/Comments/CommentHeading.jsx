export default function CommentHeading({ article }) {
  return (
    <>
      {article ? (
        <p className="px-3">Comments {article.comment_count}</p>
      ) : null}
    </>
  );
}
