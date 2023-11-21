import express from 'express';
import * as blogControllers from '../controllers/blog-controller.js';

const router = express.Router();

router.route('/')
    .get(blogControllers.displayBlogs)
    .post(blogControllers.postBlog);

router.route('/:id')
    .get(blogControllers.getBlog)
    .put(blogControllers.updateBlog)
    .delete(blogControllers.deleteBlog);


export default router;