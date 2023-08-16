const mongoose = require('mongoose');
const mongoURI="mongodb+srv://maleena:masabtank@cluster0.frhmatj.mongodb.net/?retryWrites=true&w=majority"
//mongodb://localhost:27017
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}
module.exports = connectToMongo