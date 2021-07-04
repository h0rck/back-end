import express from 'express';
import 'dotenv/config';
import apis from './routes/apis.js';
import cors from 'cors'
const app = express();

/*
    Esse é o arquivo principal aqui tudo é montado
*/

// cors e json para as apis 
app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

//As apis entram aqui 
app.use(apis);

// Aqui estabelecemos a conexão com o servidor 
app.listen(process.env.PORT);
