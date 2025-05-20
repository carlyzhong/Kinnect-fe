import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticlesPage from "./Components/Articles/ArticlesPage";
import ArticleViewPage from "./Components/Article/ArticleViewPage";

function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  return (
    <>
      <header>
        <h1 className="text-2xl text-center font-extrabold">NC NEWS</h1>
        <hr />
      </header>
      <Routes>
        <Route
          path="/"
          element={<ArticlesPage setSelectedArticleId={setSelectedArticleId} />}
        />
        <Route path="/:article_id" element={<ArticleViewPage />} />
      </Routes>
    </>
  );
}

export default App;
