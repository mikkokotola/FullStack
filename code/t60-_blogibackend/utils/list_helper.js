const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }
    return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)
}

const formatBlog = (blog) => {
    let formatted = {
        title: blog.title,
        author: blog.author,
        likes: blog.likes
    }
    return formatted
}

const formatBlogger = (blogger) => {
    let formatted = {
        author: blogger.key,
        blogs: blogger.greatest
    }
    return formatted
}

const formatBloggerLikes = (blogger) => {
    let formatted = {
        author: blogger.key,
        votes: blogger.greatest
    }
    return formatted
}


const favoriteBlog = (blogs) => {
    let likes = blogs.map(blog => blog.likes)
    let maxLikes = Math.max(...likes)
    let found = blogs.find(function (element) {
        return element.likes === maxLikes;
    })

    return formatBlog(found) 
}

const mostBlogs = (blogs) => {
    let authors = blogs.map(blog => blog.author)
    amounts = {}
    authors.forEach(i => amounts[i] = (amounts[i]||0) + 1);
    
    if (authors.length === 0) {
        return null
    }
    
    let greatest = 0
    let greatestBlogger
    for (key in amounts) {
        if (amounts[key] > greatest) {
            greatest = amounts[key]
            greatestBlogger = {key, greatest}
        } 
    }

    return formatBlogger(greatestBlogger)
    
}

const mostLikes = (blogs) => {
    let authors = blogs.map(blog => blog.author)
    let numberOfLikes = blogs.map(blog => blog.likes)
      
    amounts = {}
    for (var i=0; i < authors.length;i++) {
        amounts[authors[i]] = (amounts[authors[i]]||0) + numberOfLikes[i]
    }
    
    if (authors.length === 0) {
        return null
    }
    
    let greatest = 0
    let greatestBlogger
    for (key in amounts) {
        if (amounts[key] > greatest) {
            greatest = amounts[key]
            greatestBlogger = {key, greatest}
        } 
    }
    return formatBloggerLikes(greatestBlogger)
}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}
