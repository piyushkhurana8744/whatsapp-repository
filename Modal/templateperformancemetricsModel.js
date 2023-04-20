const mongoose=require("mongoose")

const templateperformanceSchema=mongoose.Schema({
    field:{type:String,required:true},
    templateid:{type:String,required:true},
    templatename:{type:String,required:true},
    tempatelanguage:{type:String,required:true},
    
})