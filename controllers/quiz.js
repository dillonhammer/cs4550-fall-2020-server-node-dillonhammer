const quizService = require("../services/quiz");

module.exports = (app) => {
  app.get("/api/quizzes", (req, res) =>
    quizService.findAllQuizzes().then((allQuizzes) => res.json(allQuizzes))
  );

  app.get("/api/quizzes/:qid", (req, res) =>
    quizService.findQuizById(req.params["qid"]).then((quiz) => res.json(quiz))
  );
};
