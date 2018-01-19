const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const middleware = require('./utils/middleware')
const Blog = require('./models/blog')
const blogsRouter = require('./controllers/blogs')
const config = require('./utils/config')

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.logger)
//app.use(middleware.error)

app.use(express.static('build'))

/* if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}
 */

//const mongoUrl = process.env.MONGODB_URI
mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use('/api/blogs', blogsRouter)

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