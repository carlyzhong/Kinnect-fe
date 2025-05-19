export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-sm">
      <img
        src={article.article_img_url}
        alt={`${article.article_id}.jpg`}
        className="rounded-sm w-full h-auto"
      />
      <p>{article.title}</p>
      <p className="text-sm text-gray-500">{article.author}</p>
      <p className="text-sm text-gray-800">👍 {article.comment_count}</p>
    </div>
  );
}
