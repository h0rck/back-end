import dividas from '../models/dividas.js'
import apiAxios from '../apiAxios.js';


/// retirar essa função e add select nas queries
const clearDivida = (divida) =>{

    return divida.map(e => {
        return {
            id_divida:  e.id_divida,
            id_usuario: e.id_usuario,
            motivo:     e.motivo,
            data:       e.data,
            valor:      e.valor
        }
    });
}

export default (() => {
    const divida = {}

    // GET      recebe um id do cliente e retorna todas as suas dividas.
    divida.index = async (req, res) => {
        try{
            const id_usuario = req.params.id
            const user = await apiAxios.apiCliente(id_usuario);
            if(!user) return res.status(400).send({error: 'Usuário não encontrado'});
            const divida = await dividas.find({id_usuario})
            return res.send(clearDivida(divida));
        }catch(err){
            return res.status(400).send({error:err.message});
        }
    
    }

    //POST      Adiciona novas dividas ou cliente 
    divida.adicionar = async (req, res) => {
        try {
            const id_usuario = req.params.id
            const {motivo, data, valor} = req.body;
            const user = await apiAxios.apiCliente(id_usuario);
            if(!user) res.send('Usuário não encontrado.')
            const divida = await dividas.create({id_usuario, motivo, data, valor});
            res.send(clearDivida([divida]));
        }catch(err){
            return res.status(400).send({error:err.message});
        }
        
    }

    //PUT       Edita uma divida especifica
    divida.editar = async (req,res) => {
        try{
            const query = await dividas.findOneAndUpdate({id_divida:req.params.id} , req.body, {new: true});
            res.send(JSON.stringify(clearDivida([query])));
        }catch(err){
            return res.status(400).send({error:err.message});
        }  
    }

    //DELETE    Deleta uma divida especifica
    divida.deletar = (req, res) => {
        try{
            const id_divida = req.params.id;
            if(isNaN(id_divida))  return res.status(400).send({error: 'Esse id não é valido'});
            dividas.deleteOne({id_divida}, err => {
                if(err) return console.log(err);
            });
            res.send(true)
        }catch(err){
            return res.status(400).send({error:err.message});
        }
    }

    return divida;

})()