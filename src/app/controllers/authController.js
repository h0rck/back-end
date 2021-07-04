import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken';
import User   from '../models/user.js';
import 'dotenv/config';

export default (() => {

    // Limpa o array 'user' para passar só os parâmetros necessários
    const clearUser       = user   => user.map(e => {return {nome:e.nome,email:e.email}});
    // Gera o token de segurança que serve para autentificar as apis
    const generateToken   = params => jwt.sign({params}, process.env.TOKEN_AUTH,{expiresIn: 86480,});
    const authController  = {};
   
    //POST    Cria usuários 
    authController.register = async(req, res) => {
        try{
            const user = await User.create(req.body);
            return res.send({user: clearUser([user]), token:generateToken({id: user.id})});
        }catch(err){
            return res.status(400).send({error:err.message});
        }
    }

    //POST    Valida os usuários 
    authController.authenticate = async (req, res) => {
        try{
            const {email, senha} = req.body;
            const user = await User.findOne({email});
            if(!user) return res.status(404).send({error:'Usuário não encontrado'})

            // Valida a senha 
            if(!bcrypt.compareSync(senha, user.senha)) return res.status(404).send({error:'Senha invalida'})
            return res.send({user: clearUser([user]), token: generateToken({ id: user.id })});    
        }catch(err){
            return res.status(404).send({error: err.message})
        }
    }

    return authController;

})()