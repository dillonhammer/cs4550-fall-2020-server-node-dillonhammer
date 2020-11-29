const questionModel = require("../models/question");
const quizModel = require("../models/quiz");

const findAllQuestions = () => questionModel.find().exec();

const findQuestionById = (questionId) =>
  questionModel.findById(questionId).exec();

const findQuestionsForQuiz = (quizId) =>
  quizModel
    .findById(quizId)
    .populate("questions")
    .exec()
    .then((quiz) => quiz.questions);

module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz,
};
