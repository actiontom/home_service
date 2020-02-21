'use strict';

const Express = require('./express');
const Mongo = require('./mongo');
const { speedTest } = require('./handlers/speedTest');

let server = new Express();
server.start();

speedTest();
setInterval(speedTest, 3600000);
