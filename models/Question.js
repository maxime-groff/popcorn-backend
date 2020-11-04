const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
  question: String,
  answers: Array,
})

module.exports = Question = mongoose.model("question", QuestionSchema, "questions")