const articlesRouter = require('express').Router();
const {
  patchArticle,
  postComment,
  getCommentsByArticleID,
  getArticles,
  getArticleByArticleId
} = require('../controllers/articles.controller');
const { send405Error } = require('../errors');

articlesRouter
  .route('/:article_id/comments')
  .post(postComment)
  .get(getCommentsByArticleID)
  .all(send405Error);

articlesRouter
  .route('/:article_id')
  .get(getArticleByArticleId)
  .patch(patchArticle)
  .all(send405Error);

articlesRouter
  .route('/')
  .get(getArticles)
  .all(send405Error);

module.exports = articlesRouter;
