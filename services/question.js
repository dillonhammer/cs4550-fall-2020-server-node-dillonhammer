let questionDao = require("../daos/question");

const questionService = {
  findAllQuestions: () => questionDao.findAllQuestions(),
  findQuestionById: (quizId) => questionDao.findQuestionById(quizId),
  findQuestionsForQuiz: (quizId) => questionDao.findQuestionsForQuiz(quizId),
};

module.exports = {
  ...questionService,
};
