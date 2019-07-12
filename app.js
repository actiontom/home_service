'use strict';

const Express = require('./express.js');
const Mongo = require('./mongo.js');

let server = new Express();

server.start();

let db = new Mongo();

console.log(db);

// db.insert();

//console.log(mydb);

// mydb.insertOne();
