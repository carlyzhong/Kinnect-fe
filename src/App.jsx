import { Routes, Route } from "react-router-dom";
import ArticlesPage from "./Components/ArticlesPage";

function App() {
  return (
    <>
      <header>
        <h1 className="text-3xl text-center">News</h1>
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
      </Routes>
    </>
  );
}

export default App;
