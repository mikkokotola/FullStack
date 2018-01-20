const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const middleware = require('./utils/middleware')
const Blog = require('./models/blog')
const config = require('./utils/config')

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.logger)
app.use(middleware.tokenExtractor)
//app.use(middleware.error)

app.use(express.static('build'))

const blogsRouter = require('./controllers/blogs')
app.use('/api/blogs', blogsRouter)
const usersRouter = require('./controllers/users')
app.use('/api/users', usersRouter)
const loginRouter = require('./controllers/login')
app.use('/api/login', loginRouter)


/* if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}
 */

//const mongoUrl = process.env.MONGODB_URI
mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise



//const PORT = process.env.PORT || 3003
const PORT = config.port

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}