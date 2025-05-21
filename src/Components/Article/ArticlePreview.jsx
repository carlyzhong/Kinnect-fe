import { useNavigate } from "react-router-dom";
import parseDate from "../../utils/parseDate";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VoteArticle from "../Voting/VoteArticle";

export default function ArticlePreview({ article }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <div className="px-2">
            <ArrowBackIosIcon onClick={handleBack} />
          </div>
          <AccountBoxIcon fontSize="large" />
          <div className="text-sm">
            <p>{article.author}</p>
            <p>{parseDate(article.created_at)}</p>
          </div>
        </div>
        <VoteArticle votes={article.votes} id={article.article_id} />
      </div>

      <img src={article.article_img_url} alt={`${article.article_id}.jpg`} />
      <div>
        <p className="text-xl px-1">{article.title}</p>
        <p className="text-sm px-1">🏷️ {article.topic}</p>
      </div>
      <div>
        <p className="px-1">{article.body}</p>
      </div>
    </>
  );
}
