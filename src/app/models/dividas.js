// import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';
import mongoose from '../../DB.js';

const AutoIncrement = sequence(mongoose);

const dividaSchema  = new mongoose.Schema({
    id_divida:{
        type: Number,
        // required: true
    },
    id_usuario:{
        type: Number,
        required: true
    },
    motivo:{
        type: String,
    },
    data:{
        type: Date,
    },
    valor:{
        type: String
    },
})


dividaSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id_divida'});

const dividas = mongoose.model('dividas', dividaSchema);

export default dividas;