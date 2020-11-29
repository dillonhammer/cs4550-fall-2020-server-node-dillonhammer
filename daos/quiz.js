const quizModel = require("../models/quiz");

const findAllQuizzes = () => quizModel.find().exec();

const findQuizById = (quizId) => quizModel.findById(quizId).exec();

module.exports = {
  findAllQuizzes,
  findQuizById,
};
