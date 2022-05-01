const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const app = express();
const routes = require('./routes')
const { environment } = require('./config');
const isProduction = environment === 'production';
const {ValidationError} = require('sequelize');

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

app.use(routes);

//CATCH UNHANDLED REQUESTS AND FORWARD TO ERROR HANDLER
app.use((_req, _res, next) => {
  const err = new Error('The requested resource couldnt be found');
  err.title = 'Resource not found';
  err.errors = ['The requested resource couldnt be found'];
  err.status = 404;
  next(err);
})

//PROCESSING SEQUELIZE ERRORS
app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err)
})

//ERROR FORMATTER
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  })
})

module.exports = app;
