const mongoose=require("mongoose")

const senderSchema=new mongoose.Schema({
    id: {type:String,required:true},
    display_phone_number: {type:String,required:true},
    phone_id: {type:String,required:true},
    wa_id: {type:String,required:true},
    message_id: {type:String,required:true},
    timestamp: {type:String,required:true},
    body: {type:String,required:true},
  status:{type:String,required:true}
  });


const senderModel=mongoose.model("senderdetails",senderSchema)

module.exports=senderModel