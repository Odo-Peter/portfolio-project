const express = require('express');
const cors = require('cors');
// require('express-async-errors');

const app = express();
const morgan = require('morgan');

app.use(express.static('static'));

const commerceRouter = require('./controllers/commerce');
const middleware = require('./utils/middleware');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/v1/api', commerceRouter);
app.use(middleware.errorHandler);

module.exports = app;
