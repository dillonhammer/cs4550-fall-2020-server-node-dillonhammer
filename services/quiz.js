const quizzes = require("./quiz-data.json");

const quizService = {
  findAllQuizzes: () => quizzes,
  findQuizById: (quizId) => quizzes.find((quiz) => quiz._id === quizId),
};

module.exports = {
  ...quizService,
};
