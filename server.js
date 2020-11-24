const express = require("express");
const app = express();

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

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Whiteboard server listening at port ${PORT}`);
});
