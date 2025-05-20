import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Snackbar } from "@mui/material";

import { useState } from "react";
import { downVoteArticle, upVoteArticle } from "../../utils/api";

export default function VoteArticle({ votes, id }) {
  const [hasVotedUp, setHasVotedUp] = useState(false);
  const [hasVotedDown, setHasVotedDown] = useState(false);
  const [updatedVotes, setUpdatedVotes] = useState(votes);
  const [error, setError] = useState(null);

  function handleUpVote() {
    if (!hasVotedUp && !hasVotedDown) {
      setHasVotedUp(true);
      setUpdatedVotes(votes + 1);
      upVoteArticle(id).catch(() => {
        setError("Network error. Please try again.");
        setUpdatedVotes(votes);
        setHasVotedUp(false);
        setTimeout(() => setError(null), 3000);
      });
    }
  }

  function handleDownVote() {
    if (!hasVotedUp && !hasVotedDown) {
      setHasVotedDown(true);
      setUpdatedVotes(votes - 1);
      downVoteArticle(id).catch(() => {
        setError("Network error. Please try again.");
        setUpdatedVotes(votes);
        setHasVotedDown(false);
        setTimeout(() => setError(null), 3000);
      });
    }
  }

  return (
    <div className="flex items-center gap-2">
      {error ? (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          message={error}
        />
      ) : null}
      <div className="px-3">
        <p> {hasVotedUp || hasVotedDown ? updatedVotes : votes}</p>
      </div>
      <div className="px-2" onClick={handleUpVote}>
        {hasVotedUp ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon />}
      </div>
      <div className="px-2" onClick={handleDownVote}>
        {hasVotedDown ? <ThumbDownIcon /> : <ThumbDownAltOutlinedIcon />}
      </div>
    </div>
  );
}
