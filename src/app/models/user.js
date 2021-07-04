import sequence from 'mongoose-sequence';
import bcrypt from 'bcryptjs';
import mongoose from '../../databases/mongoDB.js';

export default (() => {
    const AutoIncrement = sequence(mongoose);

    // Aqui são criadas as colunas 
    const UserSchema  = new mongoose.Schema({
        id:{
            type: Number,
        },
        nome:{
            type: String,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true,
            lowercase: true
        },
        senha:{
            type: String,
            required: true
        },
        
    });

    // Encripta a senha
    UserSchema.pre('save', async function(next){
        this.senha = await bcrypt.hash(this.senha, 10);
        next();
    });

    // Deixa o campo id_divida alto incremente 
    UserSchema.plugin(AutoIncrement, {id:'order_user',inc_field: 'id'});

    // Aqui passa o nome da tabela e os campos
    const dividas = mongoose.model('users', UserSchema);

    return dividas;

})()