import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-ya2m.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const upVoteArticle = (article_id) => {
  const req = { inc_votes: 1 };
  return newsApi.patch(`/articles/${article_id}`, req);
};

export const downVoteArticle = (article_id) => {
  const req = { inc_votes: -1 };
  return newsApi.patch(`/articles/${article_id}`, req);
};
