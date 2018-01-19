const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
const { initialBlogs, format, nonExistingId, blogsInDb, usersInDb } = require('./test_helper')

describe('Getting blogs', async () => {
    beforeAll(async () => {
        await Blog.remove({})

        const blogObjects = initialBlogs.map(blog => new Blog(blog))
        await Promise.all(blogObjects.map(blog => blog.save()))
    })

    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all blogs are returned', async () => {
        const response = await api
            .get('/api/blogs')

        expect(response.body.length).toBe(initialBlogs.length)
    })

    test('a specific blog is within the returned notes', async () => {
        const response = await api
            .get('/api/blogs')

        const contents = response.body.map(r => r.title)
        expect(contents).toContain('Tonttublogi')
    })

})


describe('New blogs saved', async () => {
    beforeAll(async () => {
        await Blog.remove({})

        const blogObjects = initialBlogs.map(blog => new Blog(blog))
        await Promise.all(blogObjects.map(blog => blog.save()))
    })

    test('a valid blog can be added ', async () => {
        const newBlog = {
            title: "Sohvablogi",
            author: "Santeri Sohva",
            url: "www.sohva.org",
            likes: 1
        }

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const response = await api
            .get('/api/blogs')

        const titles = response.body.map(r => r.title)

        expect(response.body.length).toBe(initialBlogs.length + 1)
        expect(titles).toContain('Sohvablogi')
    })

    test('when blog likes not set, set to 0', async () => {
        const newBlog = {
            title: "Sohvablogi",
            author: "Santeri Sohva",
            url: "www.sohva.org",
        }

        await Blog.remove({})

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)


        const response = await api
            .get('/api/blogs')

        const likes = response.body.map(r => r.likes)
        expect(likes[0]).toEqual(0)
    })

    test('a blog without title cannot be added ', async () => {
        const newBlog = {
            author: "Santeri Sohva",
            url: "www.sohva.org",
            likes: 1
        }

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)
    })

    test('a blog without url cannot be added ', async () => {
        const newBlog = {
            title: "Sohvablogi",
            author: "Santeri Sohva",
            likes: 1
        }

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)
    })

})

describe('Blog deletion', async () => {
    let addedBlog

    beforeAll(async () => {
        addedBlog = new Blog(
            {
                title: "Tonttublogi",
                author: "Petri Tonttunen",
                url: "www.joulu.org",
                likes: 12
            })
        await addedBlog.save()

    })

    test('a valid blog can be deleted', async () => {
        const blogsAtBeginningOfOperation = await blogsInDb()
        await api
            .delete(`/api/blogs/${addedBlog._id}`)
            .expect(204)

        const blogsAtEndOfOperation = await blogsInDb()


        const titles = blogsAtEndOfOperation.map(r => r.title)

        expect(titles).not.toContain(addedBlog.title)
        expect(blogsAtEndOfOperation.length).toBe(blogsAtBeginningOfOperation.length - 1)
    })

})

describe('Blog update', async () => {
    let addedBlog

    beforeAll(async () => {
        addedBlog = new Blog(
            {
                title: "Tonttublogi",
                author: "Petri Tonttunen",
                url: "www.joulu.org",
                likes: 12
            })
        await addedBlog.save()

    })

    test('a valid blog can be updated', async () => {
        const blogsAtBeginningOfOperation = await blogsInDb()
        addedBlog.title = "Torppablogi"
        await api
            .put(`/api/blogs/${addedBlog._id}`)
            .send(addedBlog)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const blogsAtEndOfOperation = await blogsInDb()

        const titles = blogsAtEndOfOperation.map(r => r.title)

        expect(titles).toContain("Torppablogi")
    })

})

describe('when there is initially one user at db', async () => {
    beforeAll(async () => {
        await User.remove({})
        const user = new User({ username: 'root', password: 'sekret' })
        await user.save()
    })

    test('POST /api/users succeeds with a fresh username', async () => {
        const usersBeforeOperation = await usersInDb()

        const newUser = {
            username: 'tonttunen',
            name: 'Tonttu Tonttunen',
            password: 'salainen2'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAfterOperation = await usersInDb()
        expect(usersAfterOperation.length).toBe(usersBeforeOperation.length + 1)
        const usernames = usersAfterOperation.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })

    test('POST /api/users fails with proper statuscode and message if username already taken', async () => {
        const usersBeforeOperation = await usersInDb()

        const newUser = {
            username: 'root',
            name: 'Superuser',
            password: 'salainen'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(result.body).toEqual({ error: 'username must be unique' })

        const usersAfterOperation = await usersInDb()
        expect(usersAfterOperation.length).toBe(usersBeforeOperation.length)
    })

})

afterAll(() => {
    server.close()
})
