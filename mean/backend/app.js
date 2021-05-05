const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("chegando requisicoes");
  next();
});

app.use((req, res, next) => {
  res.setEncoding("ola, estamos no back");
});

module.exports = app;
