const mongoose=require("mongoose")


const businesscapabilitySchema=mongoose.Schema({
    field:{type:String,required:true},
    max_daily_conversation_per_phone:{type:String,required:true},
    max_phone_numbers_per_business:{type:String,required:true}
})

const businesscapabilityModel=mongoose.Schema("businesscapability",businesscapabilitySchema)

module.exports=businesscapabilityModel