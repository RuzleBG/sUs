const express=require("express");

const app=express();

app.get('/', (req,res)=>{
    res.send("Test");
});

app.listen('3000', (res,req)=>{
    console.log("Running on port 3000");
});