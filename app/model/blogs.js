import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: String,
        required: true
    },
    blogContent: {
        type: String,
        required: true
    }
});

const blogModel = mongoose.model('Blog', blogSchema);

export default blogModel;