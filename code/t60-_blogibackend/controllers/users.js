const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

const formatUser = (user) => {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    adult: user.adult,
    blogs: user.blogs
  }
}

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs')
  response.json(users.map(formatUser))
})


usersRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.username === undefined || body.username.length < 3) {
    return response.status(400).json({ error: 'Username must be at least 3 characters long.' })
  }

  if (body.password === undefined || body.password.length < 3) {
    return response.status(400).json({ error: 'Password must be at least 3 characters long.' })
  }

  try {

    const existingUser = await User.find({ username: body.username })

    if (existingUser.length > 0) {
      return response.status(400).json({ error: 'username must be unique' })
    }

    const saltRounds = 10

    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      adult: body.adult === undefined ? false : body.adult,
      passwordHash
    })

    const savedUser = await user.save()

    response.json(savedUser)
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = usersRouter
