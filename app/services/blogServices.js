
import Blog from '../model/blogs.js';

export const list = async (params ={}) =>{
    const blogs = await Blog.find(params).exec();
    return blogs;
}

export const save = async (newBlog) =>{
    const blog = new Blog(newBlog);
    return await blog.save();
}

export const findById = async (id) =>{
    const blog = await Blog.findById(id).exec();
    return await blog;
}

export const edit = async (id, editedBlog) =>{
    const blog = await Blog.findByIdAndUpdate(id, editedBlog).exec();
    return await blog;
}

export const remove = async(id) => {
    const blog = await Blog.findByIdAndDelete(id).exec();
    return blog;
}
