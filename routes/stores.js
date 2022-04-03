const express= require("express");
const mongoose=require("mongoose");
const storerouter=express.Router();

storerouter.get('/',(req,res)=>{
    res.render("shops.ejs")
})
storerouter.get('/kaufland',(req,res)=>{
    res.render("shops_kauflad.ejs")
})
storerouter.get('/Lidl',(req,res)=>{
    res.render("shops_kaufland.ejs")
})
storerouter.get('/Billa',(req,res)=>{
    res.render("shops_billa.ejs")
})

module.exports=storerouter