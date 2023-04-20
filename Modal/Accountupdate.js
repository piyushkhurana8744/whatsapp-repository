const mongoose=require("mongoose")

const accountupdateSchema=mongoose.Schema({
    field:{type:String,required:true},
    event:{type:String,required:true},
    phonenumber:{type:String,required:true},
})

const accountupdateModal=mongoose.model("accountupdate",accountupdateSchema)

module.exports=accountupdateModal