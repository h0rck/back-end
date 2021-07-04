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

    // GET
    divida.index = async (req, res) => {
        try{
            const id_usuario = req.params.id

            
            const user = await apiAxios.apiCliente(id_usuario);
            
            if(!user) return res.send('Usuário não encontrado.')
        
            const divida = await dividas.find({id_usuario})
        
            return res.send(clearDivida([divida]));

        }catch(err){
            return res.send(err.message);
        }
    
    }


    //POST
    divida.adicionar = async (req, res) => {
        console.log(req.body)
        try {
            const user = await apiAxios.apiCliente(req.body.id_usuario);

            if(!user) res.send('Usuário não encontrado.')

            const divida = await dividas.create(req.body);
            
            res.send(clearDivida([divida]));

        }catch(err){
            res.send(err.message)
        }
        
    }

    //PUT
    divida.editar = async (req,res) => {
        try{

            const query = await dividas.findOneAndUpdate({id_divida:req.params.id} , req.body, {new: true});
            res.send(JSON.stringify(clearDivida([query])));

        }catch(err){
            res.send(err.message)
        }  
    }

    //DELETE
    divida.deletar = () => {
        res.send(true)
    }


    return divida;

})()