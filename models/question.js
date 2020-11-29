const mongoose = require("mongoose");
const questionSchema = require("../schemas/question");
const questionModel = mongoose.model("QuestionModel", questionSchema);
module.exports = questionModel;
