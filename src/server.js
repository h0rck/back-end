import express from 'express';
import dotenv from 'dotenv';
import apis from './apis.js';
import cors from 'cors'
// import db from './DB.js';
const app = express();
dotenv.config()


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use(apis);

app.listen(process.env.PORT);
