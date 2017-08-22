const express = require('express')
const request = require('superagent')
const cors    = require('cors')
const app     = express()
const getUrl = (offset) => `https://assets-diverse.s3.amazonaws.com/development/test-task/data${offset}.json`

app.use(cors())
app.get('/feed/:offset', (req, res) => {
  request
    .get(getUrl(req.params.offset))
    .end((err, data) => {
      if (!err) {
        res.send({ result: data.body, error: false })
      } else {
        res.send({ error: true })
      }
    })
})

app.listen('8080')
console.log('Server running on port 8080')
exports = module.exports = app

