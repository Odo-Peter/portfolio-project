const express = require('express');
// require('express-async-errors');

const app = express();
const morgan = require('morgan');

app.use(express.static('static'));

const commerceRouter = require('./controllers/commerce');
const middleware = require('./utils/middleware');

app.use(express.json());
app.use(morgan('dev'));

// app.use(middleware.tokenExtractor);
app.use('/v1/api', commerceRouter);
app.use(middleware.errorHandler);

module.exports = app;
