import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articlesFromApi) => {
      setArticlesList(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-gray-100 content-center">
      {articlesList.map((article) => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </div>
  );
}
