import  mongoose  from "mongoose";
import 'dotenv/config';

/*
    Aqui é feita a conexão com o banco
*/
export default (() => {
    mongoose.connect(process.env.MONGODB,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify:false})
        .then(() => console.log('Conexão estabelecida com o banco'))
        .catch(err => {
            console.error('Erro:', err.stack);
            process.exit(1)
        });

        return mongoose;
})()