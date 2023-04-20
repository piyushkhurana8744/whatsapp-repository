const mongoose=require("mongoose")

const accountreviewSchema=mongoose.Schema({
    field:{type:"String",required:true},
    decision:{type:"String",required:true}
})

const accountreviewModel=mongoose.model("accountreview",accountreviewSchema)

module.exports=accountreviewModel

