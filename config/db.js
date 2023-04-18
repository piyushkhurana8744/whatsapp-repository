const mongoose=require("mongoose")

const connection=mongoose.connect(`mongodb+srv://chandan:Chan%40109@cluster0.xfxzrf0.mongodb.net/whatsapp?retryWrites=true&w=majority`)

module.exports=connection