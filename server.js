const express = require("express");
const app = express();
const freshPrince = require("./public/JSONObj");

const urlLogger = (request, response, next) => {
  console.log("Request URL:", request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log("Datetime:", new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static("public"));

app.get("/", (request, response) => {
  // we dont need to explicity tell this etc because express is using the default path of the static assets to serve this content
});

app.get("/json", (request, response) => {
  response.status(200).json(freshPrince);
});

app.use(function(req, res, next) {
  res.status(404).send("Wrong Way :(");
});

app.listen(3000, () => {
  console.log("Express intro running on localhost: 3000");
});
