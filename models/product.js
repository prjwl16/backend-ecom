const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema= new Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    stock:{
        type:String,
        require:true,
    }
},{timestamps:true})

module.exports = mongoose.model("Product", productSchema)