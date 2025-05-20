export default function CommentHeading({ article }) {
  return <>{article ? <p>Comments {article.comment_count}</p> : null}</>;
}
