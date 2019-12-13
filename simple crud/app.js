const express = require("express");
const app = new express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
let tokenHandler = require("./auth/tokenHandler");

mongoose.connect("mongodb://localhost:27017/emp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

app.use("*", function(req, res, next) {
  if (req.get("Authorization") == undefined) {
    res.json({ message: "No Authorization header present" });
  } else {
    tokenHandler.verifyToken(req.get("Authorization"));
    next();
  }
});

let apiRouter = require("./routes/apiRoutes");

app.use("/api", apiRouter);

app.listen(8000, function(response) {
  console.log("Node Server started");
});
