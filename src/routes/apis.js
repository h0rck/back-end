import express from 'express';
import divida from '../app/controllers/dividaController.js';
import authMiddleware from '../app/middleware/auth.js';
import authController from '../app/controllers/authController.js';

/*
    Aqui são feitas as APIs 
*/
export default (() => {

    const apis = express.Router();

    apis.get('/', (req,res) =>{
        return res.send('<h1>Api de teste<h1/>')
    })

    // registra o usuário 
    apis.post('/register', authController.register);

    // loga o usuário 
    apis.post('/authenticate', authController.authenticate);

    // A partir daqui as rotas são autentificadas 
    // apis.use(authMiddleware);

    // Lista todas as dívidas associadas a um determinado cliente (informando o id do cliente)
    apis.get('/dividas/:id', divida.index);

    // Adiciona nova dívida, (informando o id do cliente)
    apis.post('/divida/:id', divida.adicionar);

    //Edita uma dívida (informe o id da divida)
    apis.put('/divida/:id', divida.editar);

    //Deleta uma dívida. (informe o id da divida)
    apis.delete('/divida/:id', divida.deletar);

    return apis;
})()