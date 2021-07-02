import express from 'express';
import apis from './apis.js';
import cors from 'cors'
// import db from './DB.js';
const app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(apis);

app.listen(3000, () => console.log('http://127.0.0.1:3000'));
