import  mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

export default (() => {

    
const uri = process.env.MONGODB

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify:false})
    .then(() => {
        // mongoose.Promise = global.Promise;
        // console.log('iniciou');
    })
    .catch(err => {
        console.error('Erro:', err.stack);
        process.exit(1)
    });

    return mongoose;
})()