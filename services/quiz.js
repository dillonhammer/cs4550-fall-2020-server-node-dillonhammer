const quizDao = require("../daos/quiz");

const quizService = {
  findAllQuizzes: () => quizDao.findAllQuizzes(),
  findQuizById: (quizId) => quizDao.findQuizById(quizId),
};

module.exports = {
  ...quizService,
};
