import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./Components/Articles/ArticlesPage";
import ArticleViewPage from "./Components/Article/ArticleViewPage";

function App() {
  return (
    <>
      <header>
        <h1 className="text-2xl text-center font-extrabold">NC NEWS</h1>
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/:article_id" element={<ArticleViewPage />} />
      </Routes>
    </>
  );
}

export default App;
