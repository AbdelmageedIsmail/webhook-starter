var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

var receivedMessages = ""
var messageStatuses = ""
var notifications = ""

app.get("/", function (request, response) {
  response.send("<h1>WhatsApp Bot App</h1>\n<h1>Received messages</h1>\n"+receivedMessages+"<h1>Sent messages statuses</h1>\n"+messageStatuses+"\n<h1>Notifications</h1>"+notifications);
});

app.get("/test", function (request, response) {
  
  
  let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

// prints time in HH:MM format
console.log(hours + ":" + minutes);
  
  
  response.send("<h1>WhatsApp Bot App - This is a test page</h1>\n" + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
});


app.post("/", function (request, response) {
  console.log('Incoming message: ' + JSON.stringify(request.body));
  receivedMessages += "<p>" + JSON.stringify(request.body) + "</p>";
  response.sendStatus(200);
});

app.post("/messages", function (request, response) {
  console.log('Incoming message status: ' + JSON.stringify(request.body));
  messageStatuses += "<p>" + JSON.stringify(request.body) + "</p>";
  response.sendStatus(200);
});

app.post("/notifications", function (request, response) {
  console.log('Incoming notification: ' + JSON.stringify(request.body));
  notifications += "<p>" + JSON.stringify(request.body) + "</p>";
  response.sendStatus(200);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
