const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        unique:true,
        lowercase:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        
    },
    sold:{
        type:Number,
        default:0
    },
    quantity:{
        type:Number,
        required:true
    },
    images:[],
    color:{
        type:String,
       
    },
    rating:[{
        star:Number,
        comment:String,
        postedby:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    }],
    totalrating:{
        type:String,
        default:0
    }
},
{timestamps:true});

//Export the model
module.exports = mongoose.model('Product', productSchema);