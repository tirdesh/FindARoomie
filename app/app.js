import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js'
import models from './model/index.js'


const initialize = (app) =>{
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://eerantia:eerantia@testcluster.pu9tsrc.mongodb.net/roomies?retryWrites=true&w=majority');
    registerRouter(app);
}

export default initialize;