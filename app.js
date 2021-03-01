const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello world from FSA-group8`s app!')
})
app.get('/about', (req, res) => {
    res.send(' You have requested the about page! ')
  })
app.get('/contact', (req, res) => {
    res.send(' You have requested the contact page! ')
  })
app.get('/help', (req, res) => {
    res.send(' You have requested the help page! ')
  })
app.get('/help/:topic', (req, res) => {
    res.send(` You have requested the help ${req.params.topic} page! `)
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})