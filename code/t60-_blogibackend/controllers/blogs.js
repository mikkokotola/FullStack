const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

const formatBlog = (blog) => {
    let user = undefined
    console.log(blog)
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
    const blogs = await Blog.find({}).populate('user',{username: 1, name: 1})
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
    try {
        await Blog.findByIdAndRemove(request.params.id)

        response.status(204).end()
    } catch (exception) {
        console.log(exception)
        response.status(400).send({ error: 'malformatted id' })
    }
})


blogsRouter.post('/', async (request, response) => {
    const body = request.body

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
        const user = await User.findById(body.userId)

        const blog = new Blog(
            {
                title: body.title,
                author: body.author,
                url: body.url,
                likes: body.likes === undefined ? 0 : body.likes,
                user: user._id
            }
        )
        const savedBlog = await blog.save()

        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()

        response.status(201).json(formatBlog(savedBlog))
    } catch (exception) {
        console.log(exception)
        response.status(500).json({ error: 'Something went wrong.' })
    }
})

blogsRouter.put('/:id', async (request, response) => {
    const body = request.body
    
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
        console.log("In try.")
        const blog = {
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes === undefined ? 0 : body.likes
        }
        /* const blog = new Blog(
            {
                title: body.title,
                author: body.author,
                url: body.url,
                likes: body.likes === undefined ? 0 : body.likes
            }
        ) */ 
        console.log(request.params.id)
        console.log(blog)
        
        
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true } )
        response.status(200).json(formatBlog(updatedBlog))
    } catch (exception) {
        console.log(exception)
        response.status(400).send({ error: 'malformatted id' })
    }
  
      
  })
  

module.exports = blogsRouter