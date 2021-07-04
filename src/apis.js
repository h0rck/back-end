import express from 'express';
import divida from './app/controllers/DividaController.js';

export default (() => {
    const apis = express.Router();

    // Lista todas as dívidas associadas a um determinado cliente;
    apis.get('/dividas/:id', divida.index);


    // Adiciona nova dívida, (informando qual cliente está relacionada a ela);
    apis.post('/divida/add', divida.adicionar);

    //Edita a dívida;
    apis.put('/divida/editar/:id', divida.editar);

    //Deletar uma dívida.
    apis.delete('/divida/deletar', divida.deletar);

    return apis;
})()