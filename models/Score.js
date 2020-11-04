const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreSchema = new Schema({
  username: String,
  score: Number,
})

module.exports = Score = mongoose.model("score", ScoreSchema, "scores")