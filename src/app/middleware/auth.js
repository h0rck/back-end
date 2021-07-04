import jwt from 'jsonwebtoken';
import 'dotenv/config';

/*
    Essa função valida o token passado e retorna o id do usuário que o utiliza.
    O token tem que ser passado no headers como authorization 
    ex:
        Bearer + ' ' + token    Só com um espaço separando

*/

export default (req,res,next) => {
    try{
        const authorization = req.headers.authorization;
        // verifica se o token foi passado no header 
        if(!authorization) return res.status(401).send({erro: 'O token é necessário'}); 
        const auth = authorization; // Bearer + token
        const parts = auth.split(' ');
        const [schema, token] = parts; // Bearer, token

        // Valida antes para poupar processamento  
        if(!auth || parts === 2 || !/^Bearer$/i.test(schema)) 
            return res.status(401).send({erro: 'Token invalido'});

        // valida o token usando o TOKEN do .env
        jwt.verify(token, process.env.TOKEN_AUTH,(err, decoded) => {
            if(err) return res.status(401).send({erro: 'Token invalido'});

            // retorno o Id do usuário que e passado no token para ser usado posteriormente como userId
            req.userId = decoded.params.id;
            return next();

        });
    }catch(err){
        return res.status(401).send({erro: err.message});
    }

}