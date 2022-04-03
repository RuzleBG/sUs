const router= require("./routes/recipe.js");
const storesrouter=require("./routes/stores.js")
const express=require("express");
const mongoose=require("mongoose");
const products= require("./modules/products")
const recipes=require("./modules/recipes");
const app=express();
app.use(express.json()) 
global.checkout=0;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended:false,
}));

app.get('/', (req,res)=>{

    res.render("index.ejs")

})
app.get('/finalize', (req,res)=>{
    render('final.ejs', checkout)
})
app.use('/stores', storesrouter);

app.use('/recipe', router);

app.listen('3000', (res,req)=>{
    console.log("Running on port 4000");
});