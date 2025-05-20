import { getCommentsByArticleId } from "../../utils/api";
import useFetching from "../Hooks/useFetching";
import CommentsList from "./CommentsList";

export default function CommentPreview({ article_id }) {
  const { data, isLoading, error } = useFetching(
    getCommentsByArticleId,
    article_id
  );

  return (
    <>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>ERROR: {error.message}</p> : null}
      {data ? <CommentsList comments={data} /> : null}
    </>
  );
}
