const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const formatBlog = (blog) => {
    //let user = undefined
    //console.log(blog)
    //user = await User.findById(blog.user)
    /* if (blog.user !== undefined) {
        console.log("Inside if")
        
        
    } */
    //console.log(blog.user)
    return {
        id: blog._id,
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes,
        user: blog.user
    }
}

blogsRouter.get('/', async (request, response) => {
    console.log("In blog get handler.")
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs.map(formatBlog))
    /* Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        }) */
})

blogsRouter.get('/:id', async (request, response) => {
    try {
        const blog = await Blog.findById(request.params.id)

        if (blog) {
            response.json(formatBlog(blog))
        } else {
            response.status(404).end()
        }

    } catch (exception) {
        console.log(exception)
        response.status(400).send({ error: 'malformatted id' })
    }
})

blogsRouter.delete('/:id', async (request, response) => {
    console.log("In delete.")
    let decodedToken = undefined
    try {
        decodedToken = jwt.verify(request.token, process.env.SECRET)
    } catch (exception) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    try {
        const blog = await Blog.findById(request.params.id)
        const user = await User.findById(decodedToken.id)
        //console.log(blog.user.toString())
        //console.log(user._id.toString())
        if (blog.user.toString() !== user._id.toString()) {
            return response.status(401).json({ error: 'User not allowed to perform operation.' })
        }

        await Blog.findByIdAndRemove(request.params.id)

        response.status(204).end()
    } catch (exception) {
        console.log(exception)
        response.status(400).send({ error: 'malformatted id' })
    }
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body
    console.log("In blog posthandler.")
    //console.log(request.token)
    let decodedToken = undefined
    try {
        decodedToken = jwt.verify(request.token, process.env.SECRET)
    } catch (exception) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }


    if (!request.token || decodedToken === undefined || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    if (body.title === undefined) {
        return response.status(400).json({ error: 'Blog title missing.' })
    }

    if (body.author === undefined) {
        return response.status(400).json({ error: 'Blog author missing.' })
    }

    if (body.url === undefined) {
        return response.status(400).json({ error: 'Blog url missing.' })
    }

    try {
        console.log("In blog posthandler try")
        //const user = await User.findById(body.userId)
        const user = await User.findById(decodedToken.id)


        const blog = new Blog(
            {
                title: body.title,
                author: body.author,
                url: body.url,
                likes: body.likes === undefined ? 0 : body.likes,
                user: user._id
            }
        )
        let savedBlog = await blog.save()

        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        const blogToReturn = await Blog.findById(savedBlog.id).populate('user', { username: 1, name: 1 })
        console.log(blogToReturn)
        response.status(201).json(formatBlog(blogToReturn))
    } catch (exception) {
        if (exception.name === 'JsonWebTokenError') {
            response.status(401).json({ error: exception.message })
        } else {
            console.log(exception)
            response.status(500).json({ error: 'something went wrong...' })
        }
    }
})

blogsRouter.put('/:id', async (request, response) => {
    const body = request.body
    let decodedToken = undefined
    try {
        decodedToken = jwt.verify(request.token, process.env.SECRET)
    } catch (exception) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    if (!request.token || decodedToken === undefined || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    if (body.title === undefined) {
        return response.status(400).json({ error: 'Blog title missing.' })
    }

    if (body.author === undefined) {
        return response.status(400).json({ error: 'Blog author missing.' })
    }

    if (body.url === undefined) {
        return response.status(400).json({ error: 'Blog url missing.' })
    }

    try {
        //const user = await User.findById(decodedToken.id)
        const currentBlog = await Blog.findById(request.params.id)
        console.log("Performing like update")
        console.log(currentBlog)
        const creatorUser = await User.findById(currentBlog.user)
        console.log (creatorUser)
        const blog = {
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes === undefined ? 0 : body.likes,
            user: creatorUser
        }
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
        response.status(200).json(formatBlog(updatedBlog))
    } catch (exception) {
        if (exception.name === 'JsonWebTokenError') {
            response.status(401).json({ error: exception.message })
        } else {
            console.log(exception)
            response.status(400).send({ error: 'malformatted id' })
        }
    }


})


module.exports = blogsRouter