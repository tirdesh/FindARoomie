import blogRouter from './blog-routes.js';
import userRouter from './UserManagement-routes.js';
import profileRouter from './ProfileManagement-routes.js'; 

export default (app) => {
    app.use('/blogs', blogRouter); 
    app.use('/api/users', userRouter); 
    app.use('/api', profileRouter); 
};
