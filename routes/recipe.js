const express= require("express");
const mongoose=require("mongoose");
const router=express.Router();
mongoose.connect("mongodb://localhost/favorite")

router.get("/",(req,res)=>{
    res.send("blank");
});
router.get("/favorite", (req,res)=>{
    res.send("favorite")
});

router.get("/popular", (req,res)=>{
    res.send("popular");
})

router.get("/popular/:id", (req,res)=>{
    res.send(req.params.id);
})

module.exports=router;