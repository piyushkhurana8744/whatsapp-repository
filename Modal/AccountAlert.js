const mongoose=require("mongoose")

const accountalertSchema=mongoose.Schema({
    field:{type:String,required:true},
    id:{type:String,required:true},
    alertSecurity:{type:String,required:true},
    alertStatus:{type:String,required:true},
    alertType:{type:String,required:true},
    alertDescription:{type:String,required:true}
})

const acccuntalertModel=mongoose.model("accountalert",accountalertSchema)

module.exports=acccuntalertModel