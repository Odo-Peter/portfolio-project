const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  // if (err.name === 'CastError')
  //   return res.status(400).send({ error: 'malformatted id' });
  // else if (err.name === 'ValidationError')
  //   return res.status(400).send({ error: 'All fields required' });
  // else if (err.name === 'JsonWebTokenError')
  //   return res.status(400).json({ error: 'Invalid token' });
  // else if (err.name === 'TokenExpiredError')
  //   return res.status(400).json({ error: 'Token expired' });
  // else if (err.name === 'MongoServerError')
  //   return res.status(500).json({ error: 'Invalid username' });

  next(err);
};

module.exports = { errorHandler };
