import { Router } from 'express'
import { User } from '../models/User.js'

export const usersRouter = Router()

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})

  return res.json(users)
})

usersRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)

  return res.json(user)
})

usersRouter.post('/', async (req, res) => {
  const { username, email, name, address } = req.body

  const existingUser = await User.findOne({ username })

  if (existingUser) {
    return res.status(400).json({
      message: 'User already exists'
    })
  }

  if (!username || !email || !name || !address) {
    return res.status(400).json({
      message: 'All fields must be filled'
    })
  }

  const newUser = new User({
    email,
    name,
    username,
    address
  })

  const savedUser = await newUser.save()
  return res.status(201).json(savedUser)
})

usersRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(404).end()

  await User.findByIdAndDelete(id)
    .then(() => {
      res.status(204).end()
    })
})

usersRouter.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req

  const foundUser = await User.findById(id)

  if (!foundUser) {
    return res.status(404).json({
      message: 'The user was not found'
    })
  }

  const updatedUser = await User.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true
  })

  res.json(updatedUser)
})