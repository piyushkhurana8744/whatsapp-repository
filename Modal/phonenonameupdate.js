const mongoose=require("mongoose")

const phonenonameupdateSchema=mongoose.Schema({
    field:{type:String,required:true},
    displayphoneno:{type:String,required:true},
    decision:{type:String,required:true},
    requrestedverifiedname:{type:String,required:true},
    rejectionreason:{type:String,required:true},
})

const phonenonameupdateModel=mongoose.model("phonenonameupdate",phonenonameupdateSchema)


module.exports=phonenonameupdateModel