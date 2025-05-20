export default function CommentCard({ comment }) {
  return (
    <>
      <div className="py-3">
        <div className="flex gap-1">
          <p className="text-sm text-gray-500">👤 {comment.author}</p>
          <p className="text-sm text-gray-500">on {comment.created_at}</p>
        </div>
        <div className="flex gap-3">
          <p className="ml-1 text-sm text-gray-800">👍 {comment.votes}</p>
          <p className="flex-1">{comment.body}</p>
        </div>
      </div>
    </>
  );
}
