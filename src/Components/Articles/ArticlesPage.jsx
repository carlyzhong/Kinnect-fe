import TopicNavBar from "../Topics/TopicNavBar";
import ArticleList from "./ArticlesList";

export default function ArticlesPage({ setSelectedArticleId }) {
  return (
    <>
      <TopicNavBar />
      <hr />
      <ArticleList setSelectedArticleId={setSelectedArticleId} />
    </>
  );
}
