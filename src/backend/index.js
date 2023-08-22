import express from 'express'
import cors from 'cors'
import { usersRouter } from './controllers/users.js'
import './mongoConnection.js'

const app = express()
const PORT = 1234

app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log('Server initialized')
})