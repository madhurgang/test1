const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('working now!!')
})
app.get('/a', (req, res) => res.send('Hello World!aaaa'))
app.get('/new', (req, res) => res.send({
  name: "mandhur mama!"
}))
app.post('/secured', (req, res) => {
  const username = req.headers.username
  const pass = req.headers.pass
  if (username === 'manas' && pass === "asdasd")
    res.send({
      name: "mandhur mama is now secured!",
      headers: req.headers
    })
  else
    res.status(401).send({
      err: 'unauthoriseed'
    })
})

app.listen(port, () => console.log(`url is http://site:${port}!`))