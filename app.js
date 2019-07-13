'use strict';

const Express = require('./express.js');
const Mongo = require('./mongo.js');

let server = new Express();

server.start();

let db = new Mongo();

let con = db.connect().then((res)=>{
    console.log(res);
    var myobj = { name: "Thomas4", surname: "Riley4" };
    db.insertOne('test', myobj);
});