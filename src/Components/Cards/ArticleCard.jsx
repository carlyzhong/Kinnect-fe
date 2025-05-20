export default function ArticleCard({ article, onClick }) {
  return (
    <div
      className=" flex flex-col bg-white rounded-sm h-full justify-between"
      onClick={onClick}
    >
      <div>
        <img
          src={article.article_img_url}
          alt={`${article.article_id}.jpg`}
          className="rounded-sm w-full h-auto"
        />
        <p className="py-2">{article.title}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="text-sm text-gray-500 px-1">👤 {article.author}</p>
        </div>
        <div className="flex">
          <p className="text-sm text-gray-800 px-1">👍 {article.votes}</p>
          <p className="text-sm text-gray-800 px-1">
            💬 {article.comment_count}
          </p>
        </div>
      </div>
    </div>
  );
}
