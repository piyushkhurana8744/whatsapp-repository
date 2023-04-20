const mongoose=require("mongoose")

const templatecategoryupdateSchema=mongoose.Schema({
    field:{type:String,required:true},
     messagetemplateid:{type:String,requrired:true},
     messagetemplatename:{type:String,required:true},
     messagetemplatelanguage:{type:String,required:true},
     previouscategory:{type:String,required:true},
     newcategory:{type:String,required:true},
})

const templatecategoryupdateModel=mongoose.Model("templatecategoryupdate",templatecategoryupdateSchema)


module.exports=templatecategoryupdateModel