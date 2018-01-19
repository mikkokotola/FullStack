const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')

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

beforeAll(async () => {
    await Blog.remove({})

    const blogObjects = initialBlogs.map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)

    /* initialBlogs.forEach(async (blog) => {
        let blogObject = new Blog(blog)
        await blogObject.save()
    }) */

    /* let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save() */
})

/* 
test('blog is inserted', async () => {
    await api
      .post('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
 */

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

afterAll(() => {
    server.close()
})
