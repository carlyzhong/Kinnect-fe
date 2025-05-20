import { useNavigate } from "react-router-dom";

export default function ArticlePreview({ article, isLoading, error }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  if (isLoading || !article) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div>
        <button
          className="p-2 border-1 rounded-lg"
          onClick={() => handleBack()}
        >
          ⏮️
        </button>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <p>👤 {article.author}</p>
            <p>on {article.created_at}</p>
          </div>
          <p className="px-2">👍 {article.votes}</p>
        </div>
      </div>
      <img src={article.article_img_url} alt={`${article.article_id}.jpg`} />
      <div>
        <p className="text-2xl">{article.title}</p>
        <p className="text-sm">🏷️ {article.topic}</p>
      </div>
      <div>
        <p>{article.body}</p>
      </div>
    </>
  );
}
