var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var http = require('http');

var OpenApiValidator = require('express-openapi-validator').OpenApiValidator;
// var nodemailer = require('nodemailer');

// Handlers
const { login } = require('./handlers/login');
const { greeting } = require('./handlers/greet');
const { speedReport } = require('./handlers/speedReport');
const { speedTest } = require('./handlers/speedTest');
const { currentWeather } = require('./handlers/currentWeather');
const { searchCity } = require('./handlers/searchCity');
const { covid19Summary } = require('./handlers/covid19Summary');
const { covid19Countries } = require('./handlers/covid19Countries');
const { covid19DayOne } = require('./handlers/covid19DayOne');

module.exports = class Express {

constructor(){

this.app = express();
this.port =  3000;
this.url = '0.0.0.0'; //Current PI URL

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

this.app.get('/login', async (req, res) => {

    let reponse = await login(req);
    res.send(reponse);
});

this.app.get('/greet', (req, res) => {

    let reponse = greeting(req);
    res.send(reponse);
});

this.app.get('/speedHistory', async (req, res) => {
    
    let response = await speedReport(req);
    res.send(response);
});

this.app.get('/speedTest', async (req, res) => {
    
  let response = await speedTest(req);
  res.send(response);
});

this.app.get('/currentWeather', async (req, res) => {
    
  let response = await currentWeather(req);
  res.send(response);
});

this.app.get('/searchCity', async (req, res) => {
    
  let response = await searchCity(req);
  res.send(response);
});

this.app.get('/covid19Summary', async (req, res) => {
    
  let response = await covid19Summary(req);
  res.send(response);
});

this.app.get('/covid19Countries', async (req, res) => {
    
  let response = await covid19Countries(req);
  res.send(response);
});

this.app.get('/covid19DayOne', async (req, res) => { 

  let response = await covid19DayOne(req);
  res.send(response);
});

var server = http.createServer(this.app);
server.listen(this.port);
console.group('Listening on port ' + this.port);

  }
}

// function sendMail(obj){

//     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//   var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // upgrade later with STARTTLS
//   auth: {
//     user: "actiontom.riley@gmail.com",
//     pass: "*******"
//   }
//   });
  
//   var mailOptions = {
//     from: 'actiontom.riley@gmail.com',    
//     to: 'actiontom.riley@gmail.com, desiree@gaap.co.za',
//     subject: 'Home Service Speed Test Report',
//     text: obj
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

// }