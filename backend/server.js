import express from 'express';
import initialize from './app/app.js';

const app = express();
const port = 3002;

initialize(app);


app.listen(port, () => console.log("Server is Listening to port 3002"));