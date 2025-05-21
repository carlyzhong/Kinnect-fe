import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { postComment } from "../../utils/api";

export default function PostNewComment({ article_id, onCommentPosted }) {
  const tempUsername = "testingUser1"; //change this after adding login feature

  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  function handleSend(e) {
    setError(null);
    e.preventDefault();
    setIsSending(true);
    postComment(article_id, newComment, tempUsername)
      .then(({ data }) => {
        setNewComment("");
        onCommentPosted(data.comment);
      })
      .catch((err) => {
        setError("Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <div>
      <div className="flex items-start w-full gap-2">
        <div className="pl-2">
          <AccountCircleIcon fontSize="large" />
        </div>
        <form className="flex w-full gap-2 pr-2" onSubmit={handleSend}>
          <textarea
            type="text"
            className="flex-1 border border-black rounded-xl w-full p-2 "
            name="newComment"
            placeholder="Write down your thoughts..."
            maxLength={500}
            required={true}
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
          <button
            type="submit"
            className="border border-black rounded-xl px-3 py-0 hover:bg-gray-200 h-8"
          >
            Send
          </button>
        </form>
      </div>
      <div>
        <p className="h-2 text-center">{isSending ? "Sending..." : null}</p>
        <p className="h-2 text-center">{error ? error : null}</p>
      </div>
    </div>
  );
}
