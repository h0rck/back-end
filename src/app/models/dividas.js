import sequence from 'mongoose-sequence';
import mongoose from '../../databases/mongoDB.js';

/*
    Aqui são criadas e definidas as colunas que vão receber os dados 
*/
export default (() => {
    const AutoIncrement = sequence(mongoose);
    const dividaSchema  = new mongoose.Schema({
        id_divida:{
            type: Number,
        },
        id_usuario:{
            type: Number,
            required: true
        },
        motivo:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            required: true
        },
        valor:{
            type: Number,
            required: true
        },
    })

    
    // Deixa o campo id_divida alto incremente 
    dividaSchema.plugin(AutoIncrement, {id:'order_divida',inc_field:'id_divida'});

    // Aqui passa o nome da tabela e os campos
    const dividas = mongoose.model('dividas', dividaSchema);

    return dividas;

})()