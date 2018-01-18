const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')


test('dummy is called', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {

    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })



    test('total likes correct for two blogs', () => {
        //const blog1 = new Blog(title:"Esim1", author: "Ma", url: "www.hei.org", likes: 7)
        const blog1 = { title: "Esim1", author: "Ma", url: "www.hei.org", likes: 7 }
        const blog2 = { title: "Esim2", author: "Ma", url: "www.hei.org", likes: 8 }
        let bloglist = new Array
        bloglist.push(blog1)
        bloglist.push(blog2)
        expect(listHelper.totalLikes(bloglist)).toBe(15)
    })

    test('total likes zero for empty list', () => {
        let bloglist = new Array
        expect(listHelper.totalLikes(bloglist)).toBe(0)
    })

})

describe('favoriteBlog', () => {
    let formattedAnswer = {
        title: "Ti",
        author: "Mi",
        likes: 5
    }
    
    test('favoriteBlog found for array of two', () => {
        const blog1 = { title: "Esim1", author: "Ma", url: "www.hei.org", likes: 4 }
        const blog2 = { title: "Ti", author: "Mi", url: "www.hei.org", likes: 5 }
        let bloglist = new Array
        bloglist.push(blog1)
        bloglist.push(blog2)
        expect(listHelper.favoriteBlog(bloglist)).toEqual(formattedAnswer)
    })

    test('favoriteBlog found for array of three', () => {
        const blog1 = { title: "Ti", author: "Mi", url: "www.hei.org", likes: 5 }
        const blog2 = { title: "Esim2", author: "Ma", url: "www.hei.org", likes: 4 }
        const blog3 = { title: "Esim3", author: "Ma", url: "www.hei.org", likes: 2 }
        let bloglist = new Array
        bloglist.push(blog1)
        bloglist.push(blog2)
        bloglist.push(blog3)
        expect(listHelper.favoriteBlog(bloglist)).toEqual(formattedAnswer)
    })

})

describe('mostBlogs', () => {
    test('most productive author found for array of three', () => {
        const blog1 = { title: "Ti", author: "Mi", url: "www.hei.org", likes: 5 }
        const blog2 = { title: "Esim2", author: "Ma", url: "www.hei.org", likes: 4 }
        const blog3 = { title: "Esim3", author: "Ma", url: "www.hei.org", likes: 2 }
        let bloglist = new Array
        bloglist.push(blog1)
        bloglist.push(blog2)
        bloglist.push(blog3)
        expect(listHelper.mostBlogs(bloglist)).toEqual({"author": "Ma", "blogs": 2})
    })

})

describe('mostLikes', () => {
    test('most liked author found for array of three', () => {
        const blog1 = { title: "Ti", author: "Mi", url: "www.hei.org", likes: 5 }
        const blog2 = { title: "Esim2", author: "Ma", url: "www.hei.org", likes: 4 }
        const blog3 = { title: "Esim3", author: "Ma", url: "www.hei.org", likes: 2 }
        let bloglist = new Array
        bloglist.push(blog1)
        bloglist.push(blog2)
        bloglist.push(blog3)
        expect(listHelper.mostLikes(bloglist)).toEqual({"author": "Ma", "votes": 6})
    })

})