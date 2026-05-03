import express from 'express'
const app = express()
const port = (3000, '0.0.0.0')

app.get('/', (req, res) => {
  res.send('Hello, World! rauhsan')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
