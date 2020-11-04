const express = require('express')
const router = express.Router()
const Question = require('../models/Question')

router.get('/', async (req, res) => {
  try {
    const allQuestions = await Question.find()
    res.json(
      {
        questions: allQuestions
      }
    )
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")
  }
})

router.get('/random', async (req, res) => {
  try {
    const randomQuestion = await Question.findOne()
    res.json(
      {
        data: randomQuestion
      }
    )
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")
  }
})

module.exports = router