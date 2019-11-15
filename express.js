const express = require('express');
const Mongo = require('./mongo.js');
var speedTest = require('speedtest-net');
var nodemailer = require('nodemailer');

module.exports = class Express {

constructor(){

this.app = express();
this.port =  3000;

this.app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

start(){

this.app.use(express.json());

this.app.get('/api/greet', (req, res) => {
    var name = req.query.name ? req.query.name : '';
    saveData('greet',req.query);
    res.send('Hello ' + name);
});

this.app.get('/api/speedHistory', async (req, res) => {
    
    var beginDate = req.query.beginDate ? req.query.beginDate : '';
    var endDate = req.query.endDate ? req.query.endDate : '';    
    let reportDate = await getReport(beginDate, endDate);

    res.send(reportDate);
});

this.app.get('/api/name', (req, res) => res.send('Thomas'));

this.app.post('/api/data', (req, res) => {
    saveData('data',req.body);
    res.send(req.body);
    });

this.app.listen(this.port, () => console.log(`home_service app listening on port ${this.port}!`));

startSpeedTest();
setInterval(startSpeedTest, 3600000);

setInterval(async()=>{
  let reportDate = await getReport(); 
  let dateTimeNow = new Date();
  let currentHour = dateTimeNow.getHours();
  let currentMinute = dateTimeNow.getMinutes(); 
  
  if (currentHour === 7 && currentMinute === 0 ||currentHour === 13 && currentMinute === 0 || currentHour === 23 && currentMinute === 59){

      sendMail(JSON.stringify(reportDate));
    }  
  }, 60000);

}
}



function saveData(table, obj) {

    let db = new Mongo();
    
    db.connect().then(()=>{
        db.insertOne(table, obj);
    });
}


function startSpeedTest(){

    var test = speedTest({maxTime: 5000});

    test.on('data', data => {
        let d = new Date();
        data.time = d;
        //console.dir(data);
        saveData('speedTest',data);
    });

    test.on('error', err => {
        //console.error(err);
        saveData('speedTestError', err);
    });
}

function sendMail(obj){

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'actiontom.riley@gmail.com',
      pass: 'Genesis1978'
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

async function getReport(fromDate = null, toDate = null){

  let beginDate = Date();
  let endDate = Date();
  let date = new Date();  

  if (fromDate === null || toDate === null || fromDate === "" || toDate === ""){
    beginDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + 'T' + '00' + ':' + '00' + ':00.000+00:00' ;
    endDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + 'T' + '23' + ':' + '59' + ':00.000+00:00' ;
  }
  else {
    beginDate = fromDate;
    endDate = toDate;
  }
    let db = new Mongo();

    await db.connect();     

    let reportData = []; 
    let data = await db.findDateRange('speedTest', beginDate, endDate); 

    data.forEach(element => {
        let obj = {
            time: element.time,
            id: element._id,
            uploadSpeed: element.speeds.upload,
            downloadSpeed: element.speeds.download
        };
        reportData.push(obj);        
    });

    return reportData;
   
}

