const mongoose = require("mongoose")

const url = 'mongodb+srv://fouziyasiddiqui8298:TLKCCVSzZ6jEBTcF@cluster0.cktb3vb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const connection = async () =>{
    return mongoose.connect(url)
}

module.exports = connection;