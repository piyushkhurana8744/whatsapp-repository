const mongoose=require("mongoose")

const securitySchema=mongoose.Schema({
    field:{type:String,required:true},
    displayphoneno:{type:String,required:true},
    event:{type:String,required:true},
    requester:{type:String,required:true},
})

const securityModel=mongoose.model("security",securitySchema)

module.exports=securityModel