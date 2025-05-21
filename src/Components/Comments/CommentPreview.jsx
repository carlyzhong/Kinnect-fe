import { getCommentsByArticleId } from "../../utils/api";
import useFetching from "../Hooks/useFetching";
import CommentsList from "./CommentsList";
import PostNewComment from "./PostNewComment";

export default function CommentPreview({ article_id }) {
  const { data, setData, isLoading, error } = useFetching(
    getCommentsByArticleId,
    article_id
  );

  function addComment(newComment) {
    setData((prev) => [newComment, ...prev]);
  }

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <PostNewComment article_id={article_id} onCommentPosted={addComment} />
      <CommentsList comments={data} />
    </>
  );
}
