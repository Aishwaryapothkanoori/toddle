let express = require('express');
let mongodb =require('mongodb')
let mongoclient = mongodb.MongoClient;

let register = express.Router().post("/",function(req,res){
    mongoclient.connect('mongodb://localhost:27017/todolist',(err,db)=>{


if(err){
            throw err

        }else{ 
            
                db.collection("todolistdetails").insertOne({email:req.body.email,password:req.body.password,address:req.body.address,city:req.body.city,state:req.body.state},(err,data)=>{

                if(err){
                    throw err
                }else{
                    res.send(data)
                }
            })
        }
    })

})
module.exports = register