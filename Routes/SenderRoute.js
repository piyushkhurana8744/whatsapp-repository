const express=require("express")

const app=express.Router()

const senderModal=require("../Modal/SenderModal")

const connection=require("../config/db")

app.get("/",async(req,res)=>{
    const send={
        id:request.body['entry'][0]["id"],
        display_phone_number : request.body['entry'][0]["changes"][0]["value"]["metadata"]["display_phone_number"],
        phonneid : request.body['entry'][0]["changes"][0]["value"]["metadata"]["phone_number_id"],
        messageid : request.body['entry'][0]["changes"][0]["value"]["statuses"][0]["id"],
        status : request.body['entry'][0]['changes'][0]["value"]["statuses"][0]["status"],
        wa_id:request.body['entry'][0]['changes'][0]["value"]["statuses"][0]["id"],
        timestamp : request.body['entry'][0]["changes"][0]["value"]["statuses"][0]["timestamp"],
        receiverid : request.body['entry'][0]["changes"][0]["value"]["statuses"][0]["recipient_id"]
      }
    if(request.body['entry'][0]['changes'][0]["value"]["statuses"][0]["status"]=="sent"){
        const sender=new senderModal(send)
        await sender.save
        res.send("user is added")
    }
    else{
       const sender=await senderModal.findByIdAndUpdate({"id":id},{...send,status:
        request.body['entry'][0]['changes'][0]["value"]["statuses"][0]["status"] },{new:true})
        res.send("user is updated")
    }
  

  
})