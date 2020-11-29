const mongoose = require("mongoose");
const questionSchema = require("./question");
const quizAttemptSchema = mongoose.Schema(
  {
    _id: String,
    quiz: String,
    score: Number,
    answers: [questionSchema],
  },
  { collection: "quizAttempt" }
);

module.exports = quizAttemptSchema;
