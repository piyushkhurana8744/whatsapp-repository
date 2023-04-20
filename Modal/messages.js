const mongoose=reqruire("mongoose")

const messageSchema=mongoose.Schema({
    field:{type:String,required:true},
    displayphonenuber:{type:String,required:true},
    phonenoid:{type:String,required:true},
    name:{type:String,requird:true},
    waid:{type:String,required:true},
    timestamp:{type:String,required:true},
    text:{type:String,required:true},
})

const messageModel=mongoose.model("message",messageSchema)

module.exports=messageModel