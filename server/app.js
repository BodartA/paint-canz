const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.json({ Message: "Request ok"})
})

module.exports = app