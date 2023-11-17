import express from 'express';
// import initialize from app

const app = express();
const port = 3000;

app.listen(port, () => console.log("Listening to port 3000"));