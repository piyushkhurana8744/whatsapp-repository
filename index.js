var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/webhook", function (req, res) {
  
 if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == 'endof'
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});

// app.get('/webhook', function(req, res) {
 
// });

app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  response.sendStatus(200);
});

var listener = app.listen(4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});