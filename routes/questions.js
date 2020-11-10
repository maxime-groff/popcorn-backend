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

router.get('/:limit', async (req, res) => {
  try {
    const questionsLimited = await Question.find().limit(parseInt(req.params.limit))
    res.json(
      {
        questions: questionsLimited
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
        questions: randomQuestion
      }
    )
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")
  }
})

router.post('/new', async (req, res) => {
  try {
    const question = new Question({
      question: req.body.question,
      answers: req.body.answers
    })
    await question.save()
    res.send(question)
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")
  }
})

module.exports = router