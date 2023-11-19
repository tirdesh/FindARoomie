import blogRouter from './blog-routes.js'

export default (app) =>{
    app.use('/blogs', blogRouter)
}