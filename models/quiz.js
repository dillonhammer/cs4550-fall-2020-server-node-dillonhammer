const mongoose = require("mongoose");
const quizSchema = require("../schemas/quiz");
const quizModel = mongoose.model("QuizModel", quizSchema);
module.exports = quizModel;
