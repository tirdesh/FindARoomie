import blogRouter from './blog-routes.js';
import userRouter from './UserManagement-routes.js';
import profileRouter from './ProfileManagement-routes.js'; 
import roomFilterRouter from './roomfilters-routes.js';

export default (app) => {
    app.use('/blogs', blogRouter);
    app.use('/roomlistings/filters', roomFilterRouter); 
    app.use('/api/users', userRouter); 
    app.use('/api', profileRouter); 
};
