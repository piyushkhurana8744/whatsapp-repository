const mongoose=require("mongoose")

const recieverSchema=mongoose.Schema({
    id:{type:String,required:true},
    displayphonenumber:{type:String,required:true},
    phonenoid:{type:String,required:true},
    name:{type:String,required:true},
    wa_id:{type:String,required:true},
    from:{type:String,required:true},
    text:{type:String,required:true},
})

const recieverModel=mongoose.model("recieverSchema",recieverSchema)

module.exports=recieverModel