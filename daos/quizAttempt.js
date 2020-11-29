const mongoose = require("mongoose");
const quizModel = require("../models/quiz");
const quizAttemptModel = require("../models/quizAttempt");

const scoreQuiz = (questions) => {
  let numCorrect = 0;
  questions.forEach((question) => {
    if (question.answer === question.correct) numCorrect++;
  });
  return (100 * numCorrect) / questions.length;
};

const findAttemptsForQuiz = (quizId) =>
  quizModel
    .findById(quizId)
    .populate("attempts")
    .exec()
    .then((quiz) => quiz.attempts);

const createAttempt = (quizId, attempt) => {
  const attemptId = new mongoose.Types.ObjectId();
  quizAttemptModel.create({
    _id: attemptId,
    quiz: quizId,
    answers: attempt,
    score: scoreQuiz(attempt),
  });

  return quizModel
    .findById(quizId)
    .exec()
    .then((quiz) => {
      quiz.attempts = quiz.attempts.concat(attemptId);
      return quiz.save();
    });
};

module.exports = {
  findAttemptsForQuiz,
  createAttempt,
};
