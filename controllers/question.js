const questionService = require("../services/question");

module.exports = (app) => {
  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params["qid"];
    const questions = questionService.findQuestionsForQuiz(quizId);
    res.json(questions);
  };

  app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
};
