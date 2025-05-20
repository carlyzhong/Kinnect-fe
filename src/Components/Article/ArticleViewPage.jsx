import { useParams } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";
import CommentPreview from "../Comments/CommentPreview";

export default function ArticleViewPage() {
  const { article_id } = useParams();

  return (
    <>
      <div>
        <ArticlePreview article_id={article_id} />
      </div>
      <hr className="h-0.5 w-80 mx-auto md:w-150 lg:w-250 my-4 bg-gray-300 border-0" />
      <div>
        <CommentPreview />
      </div>
    </>
  );
}
