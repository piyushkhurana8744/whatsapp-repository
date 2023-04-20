const mongoose=require("mongoose")

const campaignupdateSchema=mongoose.Schema({
    field:{type:String,required:true},
    campaign_id:{type:String,required:true},
    campaign_name:{type:String,required:true},
    old_status:{type:String,required:true},
    new_status:{type:String,required:true},
    pausedreasons:{type:[String],required:true},
    completereason:{type:String,required:true}
})

const campaignupdateModel=mongoose.model("campaignupdate",campaignupdateSchema)

module.exports=campaignupdateModel