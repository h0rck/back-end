import axios from 'axios';
/*
    Aqui são as feitas as requisições para api de terceiros.
 */
export default (() => {
    const apiAxios = {};

     //Aqui é feita a requisição para api do Jsonplaceholder  para trazer os usuários.
    apiAxios.apiCliente = async(id = '') => {
        try{
            // caso  passe qualquer valor que nao seja numero  
            if(isNaN(id)) return false; 
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
            return response.data;
        }catch(err){
            return false;
        }
    }
    return apiAxios;
})()

