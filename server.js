const router= require("./routes/recipe.js");
const express=require("express");
const mongoose=require("mongoose");
const app=express();

const axios = require('axios')

const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = await getBreeds()

  if (breeds.data.message) {
    console.log(breeds)
  }
}


//getting the api

app.get('/', (req,res)=>{
    countBreeds();
});

app.use('/recipe',router);

app.listen('1000', (res,req)=>{
    console.log("Running on port 4000");
});