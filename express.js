const express = require('express');
const Mongo = require('./mongo.js');

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
    saveData(req.query);
    res.send('Hello ' + name);
});

this.app.get('/api/name', (req, res) => res.send('Thomas'));

this.app.post('/api/data', (req, res) => {

    saveData(req.body);
    res.send(req.body);

    });

this.app.listen(this.port, () => console.log(`home_service app listening on port ${this.port}!`));
}

}

function saveData(obj) {
    
let db = new Mongo();

db.connect().then(()=>{
    db.insertOne('test', obj);
});

}