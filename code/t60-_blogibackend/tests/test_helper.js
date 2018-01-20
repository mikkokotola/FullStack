const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        title: "Tonttublogi",
        author: "Petri Tonttunen",
        url: "www.joulu.org",
        likes: 12
    },
    {
        title: "Kukkablogi",
        author: "Kauno Kukkanen",
        url: "www.kukkia.org",
        likes: 7
    }
]

const initialUsers = [
    {
        username: "marde",
        name: "M Maarna",
        password: "malaisuus",
        adult: "false"
    },
    {
        username: "tarde",
        name: "T Taarna",
        password: "talaisuus",
        adult: "true"
    }
]

const format = (blog) => {
    return {
        id: blog._id,
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes
    }
}

const nonExistingId = async () => {
    const blog = new Blog()
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(format)
}

const usersInDb = async () => {
    const users = await User.find({})
    return users
}

module.exports = {
    initialBlogs, initialUsers, format, nonExistingId, blogsInDb, usersInDb
}