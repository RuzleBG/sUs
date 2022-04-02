const mongoose=require('mongoose');

const products=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        Default: 0

    },
    avaliable:{
        type: Boolean,
        default: true,
    },
    netWeight:{
        type: Number,
        required: true
    },
    stores:[{
        type: String,
        
    }]
});


module.exports=mongoose.model('products', products);
