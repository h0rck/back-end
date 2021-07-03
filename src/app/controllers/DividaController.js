import axios from 'axios';
import dividas from '../models/dividas.js'
const divida = {}

const users = async(id = '') => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        return response.data;
    }catch(err){

    }
}


/// retirar essa função e add selects nas queries
const clearDivida = (divida) =>{
    return divida.map(e => {
        return{
            id_divida:  e.id_divida,
            id_usuario: e.id_usuario,
            motivo:     e.motivo,
            data:       e.data,
            valor:      e.valor
        }
    });
}

// GET
divida.index = async (req, res) => {
    const id_usuario = req.params.id

    // caso  passe qualquer valor que nao seja numero  
    if(isNaN(id_usuario)) return res.send('Usuario não encontrado.')
    const user = await users(id_usuario);
    if(!user) return res.send('Usuario não encontrado.')

    const divida = await dividas.find({id_usuario})

    return res.send(clearDivida(divida));
}


//POST
divida.adicionar = async (req, res) => {

   const user = await users(req.body.id_usuario);
   if(!user) res.send('Usuario não encontrado.')

    const divida = await dividas.create(req.body);

    res.send(clearDivida([divida]));
    
}

//PUT

divida.editar = async (req,res) => {
    const id_divida = req.params.id;

    const query = await dividas.findOneAndUpdate({id_divida} , req.body, {new: true});

    if(!query) res.send(JSON.stringify(false));
    const ress = clearDivida([query])
    res.send(JSON.stringify(ress))
    
}



export default divida;