import { useEffect, useState } from "react";
import { getArticleById } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function ArticlePreview({ article_id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, [article_id]);

  function handleBack() {
    navigate("/");
  }

  if (isLoading || !article) {
    return <p>Loading...</p>;
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
        <p>👤 {article.author}</p>
        <p className="text-sm"> {article.created_at}</p>
        <p>👍 {article.votes}</p>
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
