let questions = require("./question-data.json");

const questionService = {
  findQuestionsForQuiz: (quizId) =>
    questions.filter((question) => question.quizId === quizId),
};

module.exports = {
  ...questionService,
};
