var express = require('express');
var bodyParser = require('body-parser');

let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let fetch  = express.Router().get("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/todolist",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                console.log('fetch called...');
                db.collection("todolistdetails").find({}).toArray((err,array)=>{
                    if(err){
                         throw err;
                    }
                    else{
                        if(array.length > 0){
                            res.send(array);                    
                        } else {
                            res.send({message:"Record Not Found..."});
                        }
                    }
                });
            }
        });
});
module.exports = fetch;