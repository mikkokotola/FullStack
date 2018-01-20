const logger = (request, response, next) => {
    if (process.env.NODE_ENV === 'test') {
        return next()
    }
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const error = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const tokenExtractor = (request, response, next) => {
    console.log("In tokenExtractor.")
    const authorization = request.get('authorization')
           
        if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
            request.token = authorization.substring(7)
            console.log(request.token)
            //return authorization.substring(7)
        } else {
            request.token = "Not defined."
        }
    next()
}

module.exports = {
    logger,
    error,
    tokenExtractor
}
