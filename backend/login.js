let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient; 

let login  = require("express").Router().get("/:email/:password",(req,res)=>{
    talentsprint.connect("mongodb://localhost:27017/todolist",(err,db)=>{
        if(err){
            throw err;
        }
        else{
            db.collection("todolistdetails").findOne({"email":req.params.email,"password":req.params.password},
            (err, result) => {
                if (err) {
                    throw err;
                }
                else{
                        res.send(result);                   
                    }
            });
        }
    });
});
module.exports = login;
