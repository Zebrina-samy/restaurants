const express = require('express');
   const mongoose = require('mongoose');
   const app = express();

   const uri="mongodb+srv://AmbukaSamy:1234@0323prac2.gklkqkp.mongodb.net/?retryWrites=true&w=majority"
   
   async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("connection successful")
    }
    catch(error){
        console.log(error)
    }
   }
 
   connect();
      //port connection
   app.listen(5000,() =>{
      console.log('db connecct to port 5000')
   })