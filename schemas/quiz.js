const mongoose = require("mongoose");
const quizSchema = mongoose.Schema(
  {
    _id: String,
    title: String,
    questions: [
      {
        type: String,
        ref: "QuestionModel",
      },
    ],
    attempts: [
      {
        type: String,
        ref: "QuizAttemptModel",
      },
    ],
  },
  { collection: "quiz" }
);

module.exports = quizSchema;
