const topicsRouter = require('express').Router();
const { getTopics } = require('../controllers/topics.controller');
const { send405Error } = require('../errors');

topicsRouter
  .route('/')
  .get(getTopics)
  .all(send405Error);

module.exports = topicsRouter;
