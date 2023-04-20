const mongoose=require("mongoose")

const phonenoqualityupdateSchema=mongoose.Schema({
    field:{type:String,required:true},
    displayphonenumber:{type:String,required:true},
    event:{type:String,required:true},
    currentlimit:{type:String,required:true},
})

const phonenoqualityupdateModel=mongoose.model("phonenoqualityupadte",phonenoqualityupdateSchema)

module.exports=phonenoqualityupdateModel