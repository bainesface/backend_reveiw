exports.handlePSQLErrors = (err, req, res, next) => {
  if (err.code !== undefined) {
    console.log('psql code', err.code);
    const PSQLcodes = {
      '22P02': { status: 400, msg: 'invalid article id input' },
      '23502': { status: 404, msg: 'please add a comment' }
    };
    const statusToSend = PSQLcodes[err.code].status;
    const messageToSend = PSQLcodes[err.code].msg;

    res.status(statusToSend).send({ msg: messageToSend });
  } else {
    next(err);
  }
};

exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status !== undefined) res.status(err.status).send({ msg: err.msg });
};