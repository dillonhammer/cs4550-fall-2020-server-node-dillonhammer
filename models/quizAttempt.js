const mongoose = require("mongoose");
const quizAttemptSchema = require("../schemas/quizAttempt");
const quizAttemptModel = mongoose.model("QuizAttemptModel", quizAttemptSchema);
module.exports = quizAttemptModel;
