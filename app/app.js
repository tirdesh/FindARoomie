import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';


const initialize = (app) =>{
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://eerantia:eerantia@testcluster.pu9tsrc.mongodb.net/roomies?retryWrites=true&w=majority');
    // import router
}

export default initialize;