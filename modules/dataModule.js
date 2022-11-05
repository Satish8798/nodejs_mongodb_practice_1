 const mongo=require("../connect")
 
 
 module.exports.get= async function(req,res,next){
    const response= await mongo.selectedDb.collection("data").find().toArray();
    res.send(response);
}