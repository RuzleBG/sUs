const router= require("./routes/recipe.js");
const express=require("express");
const mongoose=require("mongoose");
const products= require("./modules/products")
const app=express();

const uri='mongodb+srv://Sussy:sussy@cluster0.muvzk.mongodb.net/app?retryWrites=true&w=majority'
mongoose.connect(uri);
mongoose.connection.on('connected', ()=>{
    console.log("dobre e");
}
)
app.get('/', (req,res)=>{
    res.send("dobre")
});

app.use('/recipe',router);

app.listen('3000', (res,req)=>{
    console.log("Running on port 4000");
});