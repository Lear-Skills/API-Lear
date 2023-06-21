import routes from './routes'
import express from 'express'
import db from './db/connection'

db.sync().then(() => {
  console.log('connect with database')
})

const app = express()
const PORT = 8000

app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log('listening server')
})