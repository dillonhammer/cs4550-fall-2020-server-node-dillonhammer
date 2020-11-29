const questionService = require("../services/question");

module.exports = (app) => {
  app.get("/api/quizzes/:qid/questions", (req, res) =>
    questionService
      .findQuestionsForQuiz(req.params["qid"])
      .then((questions) => res.json(questions))
  );

  app.get("/api/questions", (req, res) =>
    questionService
      .findAllQuestions()
      .then((allQuestions) => res.json(allQuestions))
  );

  app.get("/api/questions/:qid", (req, res) =>
    questionService
      .findQuestionById(req.params["qid"])
      .then((question) => res.json(question))
  );
};
