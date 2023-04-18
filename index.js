const express = require('express');
const bodyParser = require('body-parser');


const app=express()
const url = require('url');
const connection=require("./config/db")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get('/webhooks/github', (req, res) => {
    
    const mode = r.RequestQuery["hub.mode"]

const my_shared_secret = "complete"


if (mode == "subscribe") then
  
  const token = r.RequestQuery["hub.verify_token"]
  
  if (!token == my_shared_secret){
    then  
    r:SetResponseStatusCode(401)
    r:StopForwarding()
    return
  } 
  else{
 
    r:SetResponseBody(r.RequestQuery["hub.challenge"])
    end
  }
 
  });

app.listen(8080,async()=>{
    await connection
    console.log("server is running")
})