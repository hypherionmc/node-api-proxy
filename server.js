require("dotenv").config();
const express = require("express");
const request = require("request");
const cors = require("cors");

const { config, assignKey, logPort } = require("./config/config");

const app = express();

app.use(cors()).use("/", (req, res) => {
  //Pipe is through request, this will just redirect
  //everything from the api to your own server at localhost.
  //It will also pipe your queries in the url
  req
    .pipe(request({ qs: assignKey(req.query), uri: config.apiUrl + req.url }))
    .pipe(res);
});

//Start the server by listening on a port
app.listen(config.port, logPort(config.port));
