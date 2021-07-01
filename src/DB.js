import  mongoose  from "mongoose";
const uri = `mongodb+srv://Horck:baconadoro123@cluster0.c46gh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify:false})
    .then(() => {
        // mongoose.Promise = global.Promise;
        console.log('iniciou');
    })
    .catch(err => {
        console.error('Erro:', err.stack);
        process.exit(1)
    });

export default mongoose;