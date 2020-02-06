const usersRouter = require('express').Router();
const { getUserByUsername } = require('../controllers/users.controller');
const { send405Error } = require('../errors');

usersRouter
  .route('/:username')
  .get(getUserByUsername)
  .all(send405Error);

module.exports = usersRouter;
