import express from 'express';
import apis from './apis.js';
// import db from './DB.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(apis);

app.listen(8000, () => console.log('http://127.0.0.1:8000'));
