const express = require('express')
const app = express()
const port = 3000

app.get('/data', (req, res) => {
  res.json({msg:'Hello World!'})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})