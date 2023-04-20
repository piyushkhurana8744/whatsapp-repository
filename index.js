var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

const connection = require("./config/db")

const recievererModal=require("./Modal/SenderModal")

const accountalertModel = require("./Modal/AccountAlert")

const accountreviewupdateModel = require("./Modal/AccountReviewUpdate")

const accountupdateModel = require("./Modal/Accountupdate")

const businesscapabilityModel = require("./Modal/BusinessCapabiityModel")

const campaignupdateModel = require("./Modal/campaignstatusupdateModel")

const messageModel = require("./Modal/messages")

const messagetemplateModel = require("./Modal/messagetemplatestatusModel")

const phonenonameupdateModel=require("./Modal/phonenonameupdate")

const phonenoqualityupdateModel = require("./Modal/phonenoqualityupdate")

const securityModel = require("./Modal/securityModel")

const recieverModal=require("./Modal/recieverModal")

const templatecategoryupdateModel=require("./Modal/templatecategoryupdate")

const templateperformancemetricsModel=require("./Modal/templateperformancemetricsModel")

// const templatecategoryupdateModel = require("./Modal/templatecategoryupdate")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/webhook", function(req, res) {

  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == 'endof'
  ) {
    res.reciever(req.query['hub.challenge']);
  } else {
    res.recieverStatus(400);
  }
});

// app.get('/webhook', function(req, res) {

// });

app.post("/webhook", async function(request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
   response.sendStatus(200);
  const field = request.body.entry[0].changes[0].field
  if (field === "account_alerts") {
    const account_alerts = new accountalertModel({
      field: request.body.entry[0].changes[0].field,
      id: request.body.entry[0].changes[0].value.entity_id,
      alertSecurity: request.body.entry[0].changes[0].value.alert_severity,
      alertStatus: request.body.entry[0].changes[0].value.alert_status,
      alertType: request.body.entry[0].changes[0].value.alert_type,
      alertDescription: request.body.entry[0].changes[0].value.alert_description,
    })
    await account_alerts.save()
  }
  else if (field === "account_review_update") {
    const account_review_update = new accountreviewupdateModel({
      field: request.body.entry[0].changes[0].field,
      decision: request.body.entry[0].changes[0].value.decision,
    })
    await account_review_update.save()
  }
  else if (field === "account_update") {

    const account_update = new accountupdateModel({
      field: request.body.entry[0].changes[0].field,
      event: request.body.entry[0].changes[0].value.event,
      phonenumber: request.body.entry[0].changes[0].value.phone_number
    })
    await account_update.save()
  }
  else if (field === "account_review_update") {
    const account_review_update = new accountreviewupdateModel({
      field: request.body.entry[0].changes[0].field,
      decision: request.body.entry[0].changes[0].value.decision,
    })
    await account_review_update.save()
  }
  else if (field === "business_capability_update") {
    const business_capability_update = new businesscapabilityModel({
      field: request.body.entry[0].changes[0].field,
      max_daily_conversation_per_phone: request.body.entry[0].changes[0].value.max_daily_conversation_per_phone,
      max_phone_numbers_per_business: request.body.entry[0].changes[0].value.max_daily_conversation_per_phone,
    })
    await business_capability_update.save()
  }
  else if (field === "campaign_status_update") {
    const campaign_status_update = new campaignupdateModel({
      field: request.body.entry[0].changes[0].field,
      campaign_id: request.body.entry[0].changes[0].value.campaign_id,
      campaign_name: request.body.entry[0].changes[0].value.campaign_name,
      old_status: request.body.entry[0].changes[0].value.old_status,
      new_status: request.body.entry[0].changes[0].value.new_status,
      pausedreasons: request.body.entry[0].changes[0].value.paused_reasons,
      completereason: request.body.entry[0].changes[0].value.complete_reason
    })
    await campaign_status_update.save()
  }
  else if (field === "messages") {
    const messages = new messageModel({
      field: request.body.entry[0].changes[0].field,
      displayphonenuber: request.body.entry[0].changes[0].value.metadata.display_phone_number,
      phonenoid: request.body.entry[0].changes[0].value.metadata.phone_number_id,
      name: request.body.entry[0].changes[0].value.contacts[0].profile.name,
      waid: request.body.entry[0].changes[0].value.contacts[0].wa_id,
      timestamp: request.body.entry[0].changes[0].value.messages[0].timestamp,
      text: request.body.entry[0].changes[0].value.messages[0].text.body,
    })
    await messages.save()
  }
  else if (field === "message_template_status_update") {
    const message_template_status_update = new messagetemplateModel({
      field: request.body.entry[0].changes[0].field,
      event: request.body.entry[0].changes[0].value.event,
      messagetemplateid: request.body.entry[0].changes[0].value.message_template_id,
      messagetemplatename: request.body.entry[0].changes[0].value.message_template_name,
      messagetemplatelanguage: request.body.entry[0].changes[0].value.message_template_language,
      reason: request.body.entry[0].changes[0].value.reason,
    })
    await message_template_status_update.save()
  }
  else if (field === "phone_number_name_update") {
    const phone_number_name_update = new phonenonameupdateModel({
      field: request.body.entry[0].changes[0].field,
      displayphoneno: request.body.entry[0].changes[0].value.display_phone_number,
      decision: request.body.entry[0].changes[0].value.decision,
      requrestedverifiedname: request.body.entry[0].changes[0].value.requested_verified_name,
      rejectionreason: request.body.entry[0].changes[0].value.rejection_reason,
    })
    await phone_number_name_update.save()
  }
  else if (field === "phone_number_quality_update") {
    const phone_number_quality_update = new phonenoqualityupdateModel({
      field: request.body.entry[0].changes[0].field,
      displayphonenumber: request.body.entry[0].changes[0].value.display_phone_number,
      event: request.body.entry[0].changes[0].value.event,
      currentlimit: request.body.entry[0].changes[0].value.current_limit,
    })
    await phone_number_quality_update.save()
  }
  else if (field === "security") {
    const security = new securityModel({
      field: request.body.entry[0].changes[0].field,
      displayphoneno: request.body.entry[0].changes[0].value.display_phone_number,
      event: request.body.entry[0].changes[0].value.event,
      requester: request.body.entry[0].changes[0].value.requester,
    })
    await security.save()
  }
  else if(field==="template_category_update"){
    const template_category_update=new templatecategoryupdateModel({field:request.body.entry[0].changes[0].field,
messagetemplateid:request.body.entry[0].changes[0].value.message_template_id,
      messagetemplatename:request.body.entry[0].changes[0].value.message_template_name,
      messagetemplatelanguage:request.body.entry[0].changes[0].value.message_template_language,
      previouscategory:request.body.entry[0].changes[0].value.previous_category,
      newcategory:request.body.entry[0].changes[0].value.new_category})
    await template_category_update.save()
  }
  else if (field === "template_performance_metrics") {
    const template_performance_metrics = new templateperformancemetricsModel({
      field: request.body.entry[0].changes[0].field,
      templates_performance_metric: request.body.entry[0].changes[0].value.templates_performance_metrics,
    })
    await template_performance_metrics.save()
  }
  else{
    const reciever={
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
        const recieverer=new recievererModal(reciever)
        await recieverer.save
        res.reciever("user is added")
    }
    else if(request.body['entry'][0]['changes'][0]["value"]["statuses"][0]["status"]=="delivered"||request.body['entry'][0]['changes'][0]["value"]["statuses"][0]["status"]=="read"){
       const recieverer=await recievererModal.findByIdAndUpdate({"id":id},{...reciever,status:
        request.body['entry'][0]['changes'][0]["value"]["statuses"][0]["status"] },{new:true})
        res.reciever("user is updated")
    }
    else{
      const reciever=new recieverModal(
        {
          id:request.body.entry[0].changes[0].value.messages[0].id,
  displayphonenumber:request.body.entry[0].changes[0].value.metadata.display_phone_number,
  phonenoid:request.body.entry[0].changes[0].value.metadata.phone_number_id,
  name:request.body.entry[0].changes[0].value.contacts[0].profile.name,
  wa_id:request.body.entry[0].changes[0].value.contacts[0].profile.wa_id,
  from:request.body.entry[0].changes[0].value.messages[0].from,
  text:request.body.entry[0].changes[0].value.messages[0].text.body
        }
      )
      console.log(reciever)
      await reciever.save()
    }
  }
});

var listener = app.listen(5555, async function() {
  await connection
  console.log('Your app is listening on port ' + listener.address().port);
});