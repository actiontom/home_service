var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var http = require('http');

var OpenApiValidator = require('express-openapi-validator').OpenApiValidator;

const Mongo = require('./mongo.js');
//var speedTest = require('speedtest-net');
var nodemailer = require('nodemailer');

// Handlers
const { greeting } = require('./handlers/greet');
const { speedReport } = require('./handlers/speedReport');
const { speedTest } = require('./handlers/speedTest');

module.exports = class Express {

constructor(){

this.app = express();
this.port =  3000;
//this.url = '0.0.0.0'; //Current PI URL

this.app.use(bodyParser.json());
this.app.use(logger('dev'));
this.app.use(express.json());
this.app.use(express.urlencoded({ extended: false }));
this.app.use(cookieParser());
this.app.use(express.static(path.join(__dirname, 'public')));

const spec = path.join(__dirname, 'openapi.yaml');
}

// Starts Express Application.
start(){

    // Header information.
    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    // 1. Install the OpenApiValidator on your express app
    new OpenApiValidator({
      apiSpec: './openapi.yaml',
      // securityHandlers: {
      //   ApiKeyAuth: (req, scopes, schema) => true,
      // },
    }).install(this.app);

this.app.get('/greet', (req, res) => {

    let reponse = greeting(req);
    res.send(reponse);
});

this.app.get('/speedHistory', async (req, res) => {
    
    let response = await speedReport(req);
    res.send(response);
});

this.app.get('/speedTest', async (req, res) => {
    
  let response = await speedTest();
  res.send(response);
});


var server = http.createServer(this.app);
server.listen(this.port);
console.group('Listening on port ' + this.port);

/*
startSpeedTest();
setInterval(startSpeedTest, 3600000);
*/

// setInterval(async()=>{
//     let dateTimeNow = new Date();
//     let currentHour = dateTimeNow.getHours();
//     let currentMinute = dateTimeNow.getMinutes();    
  
//   if (currentHour === 4 && currentMinute === 0 || currentHour === 13 && currentMinute === 0 || currentHour === 23 && currentMinute === 59){
    
//     let reportData = await getReport();    
//         sendMail(JSON.stringify(reportData));
//     }
//   }, 60000);

  }
}

// Helper functions.
// function saveData(table, obj) {

//     let db = new Mongo();
    
//     db.connect().then(()=>{
//         db.insertOne(table, obj);
//     });
// }

// function startSpeedTest(){

//     var test = speedTest({maxTime: 5000});

//     test.on('data', data => {
//         let d = new Date();
//         data.time = d;       
//         saveData('speedTest',data);
//     });

//     test.on('error', err => {        
//         saveData('speedTestError', err);
//     });
// }

function sendMail(obj){

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "actiontom.riley@gmail.com",
    pass: "Genesis1978"
  }
  });
  
  var mailOptions = {
    from: 'actiontom.riley@gmail.com',    
    to: 'actiontom.riley@gmail.com, desiree@gaap.co.za',
    subject: 'Home Service Speed Test Report',
    text: obj
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}