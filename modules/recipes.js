const mongoose=require("mongoose");

const recipes=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    ingredients: [{
        name:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required:true
        },
        netWeight: {
            type:Number,
            required:true
        }
    }],
    
    favorite: {
        type: Boolean,
        default: false
    }
})
module.exports= mongoose.model('recipes', recipes)