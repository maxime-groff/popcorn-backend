const express = require('express')
const router = express.Router()
const Score = require('../models/Score')

router.get('/', async (req, res) => {
  try {
    const allScores = await Score.find()
    res.json(
      {
        scores: allScores
      }
    )
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")
  }
})

router.get('/:username', async (req, res) => {
  try {
    var reg = new RegExp('^\\d+$');
    if (reg.test(req.params.username)) {
      const userScore = await Score.find().limit(parseInt(req.params.username))
      res.json(userScore)
    }
    else {
      const userScore = await Score.find({ username: req.params.username})
      res.json(userScore)
    }
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")
  }
})

module.exports = router