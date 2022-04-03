const { request } = require("express");
const express= require("express");
const mongoose=require("mongoose");
const router=express.Router();
const products=require("../modules/products");
const recipes=require("../modules/recipes")

router.get("/",async (req,res)=>{
    res.render("recipe.ejs")

});
router.get("/favorite", async (req,res)=>{
    const fav_recipes=new recipes.find({
        favorite:true
    })
    res.render("recipe.ejs", {fav_recipes:fav_recipes});
});

router.get("/popular", (req,res)=>{
    res.render("popular_recipes.ejs");

})

router.put("/update", async (req,res)=>{
    const new_recipe=new recipes({
        name: req.body.name,
        type: req.body.type,
        ingredients: req.body.ingredients,
        favorite: req.body.favorite,
    })
    await new_recipe.save();
    res.redirect("/popular");
})

router.delete("/delete", async(req,res)=>{
   await recipes.findOneAndDelete({
        name: req.body.name,
        type: req.body.type
    })
})

router.get('/add', async (req,res)=>{
    const item=new products.findOne({
        type: req.body.type,
        name: req.body.name,
    })
    if(item.avaliable==true){
        checkout+=item.price;
    }
    res.redirect("/popular");
})

module.exports=router;