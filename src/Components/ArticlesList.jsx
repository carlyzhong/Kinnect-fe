import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticlesList(articlesFromApi);
    });
  });

  return (
    <div className="p-2 grid grid-cols-2 gap-2 bg-gray-100 content-center">
      {articlesList.map((article) => (
        <ArticleCard article={article} key={article.article_id} />
      ))}
    </div>
  );
}
