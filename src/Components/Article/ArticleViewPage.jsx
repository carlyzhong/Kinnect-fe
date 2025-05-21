import { useParams } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import CommentPreview from "../Comments/CommentPreview";
import useFetching from "../Hooks/useFetching";
import { getArticleById } from "../../utils/api";
import CommentHeading from "../Comments/CommentHeading";

export default function ArticleViewPage() {
  const { article_id } = useParams();
  const { data, isLoading, error } = useFetching(getArticleById, article_id);

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 gap-8">
        <div>
          <ArticlePreview article={data} />
        </div>
        <hr className="h-0.5 w-80 mx-auto md:w-150 lg:w-250 my-4 bg-gray-300 border-0 md:hidden" />
        <div>
          <CommentHeading comment_count={data.comment_count} />
          <CommentPreview article_id={article_id} />
        </div>
      </div>
    </>
  );
}
