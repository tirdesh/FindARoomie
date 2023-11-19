import * as blogSevices from '../services/blogServices.js';
import { setErrorResponse, setResponse } from './response-handler.js';

export const displayBlogs = async (request, response) =>{
    try{
        const params = {...request.query};
        const blogs = await blogSevices.list(params);
        setResponse(blogs, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const postBlog = async (request, response) =>{
    try{
        const blogData = {...request.body};
        const blog = await blogSevices.save(blogData);
        setResponse(blog, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const getBlog = async (request, response) =>{
    try{    
        const id = request.params.id;
        const blog = await blogSevices.findById(id);
        setResponse(blog, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const updateBlog = async (request, response) =>{
    try{
        const id = request.params.id;
        const editedBlog = {...request.body};
        const blog = await blogSevices.edit(id, editedBlog);
        setResponse(editedBlog, response);
    }catch(err){
        setErrorResponse(err, response);
    }
}

export const deleteBlog = async (request, response) =>{
    try{
        const id = request.params.id;
        const blog = await blogSevices.remove(id);
        setResponse(blog, response);

    }catch(err){
        setErrorResponse(err, response);
    }
}