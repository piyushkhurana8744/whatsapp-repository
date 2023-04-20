const mongoose=require("mongoose")

const messagetemplateSchema=mongoose.Schema({
    field:{type:String,required:true},
     event:{type:String,required:true},
     messagetemplateid:{type:String,requrired:true},
     messagetemplatename:{type:String,required:true},
     messagetemplatelanguage:{type:String,required:true},
     reason:{type:String,required:true},
})

const messagetemplateModel=mongoose.model("messagetemplate",messagetemplateSchema)


module.exports=messagetemplateModel