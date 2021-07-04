// import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';
import mongoose from '../../DB.js';

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
        data:{
            type: Date,
            required: true
        },
        valor:{
            type: Number,
            required: true
        },
    })

    /* 
    Deixa o campo id_divida alto incremente 
    */
    dividaSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id_divida'});

    const dividas = mongoose.model('dividas', dividaSchema);

    return dividas;

})()