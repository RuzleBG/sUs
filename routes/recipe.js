const express= require("express");
const mongoose=require("mongoose");
const router=express.Router();
const products=require("../modules/products");

router.get("/",(req,res)=>{
    res.send("blank");
});
router.get("/favorite", async (req,res)=>{
    res.send("favorite")
    const product=new products({
        name: "rice",
        type: "brown",
        price: 12.92,
        netWeight: 500,
        avaliable: true,
        stores: ["kaufland"]
     })

     await product.save();
     
});

router.get("/popular", (req,res)=>{
    res.send("popular");
})

router.put("/popular", async (req,res)=>{
 
})

router.get("/popular/:id", (req,res)=>{
    res.send(req.params.id);
})

module.exports=router;