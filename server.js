require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://admin:${process.env.ATLAS_PASSWORD}@cs4550.x3rjs.mongodb.net/${process.env.ATLAS_DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to database"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Origin"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/knockknock", (req, res) => {
  res.send("Who's there?");
});

require("./controllers/quiz")(app);
require("./controllers/question")(app);
require("./controllers/quizAttempt")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Whiteboard server listening at port ${PORT}`);
});
