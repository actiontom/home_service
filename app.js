'use strict';

const Express = require('./express.js');
let server = new Express();
server.start();


const AssistantV1 = require('ibm-watson/assistant/v1');

const assistant = new AssistantV1({
  version: '2019-02-28',
  iam_apikey: 'DJQrlgxu5HZQA5-QqXjVEYpEcnvbFuW-kD-Sr0K5ob6g',
  url: 'https://gateway-lon.watsonplatform.net/assistant/api',
  // disable_ssl_verification: true,
});

// assistant.listWorkspaces()
//   .then(res => {
//     console.log(JSON.stringify(res, null, 2));
//   })
//   .catch(err => {
//     console.log(err)
//   });

// let response = assistant.message({
//     workspace_id: 'b4d038cc-d84b-4163-a92b-4015d27ee23f',
//     input: {'text': 'Hello'}
//     })
//     .then(res => {
//       console.log(JSON.stringify(res, null, 2));
//     })
//     .catch(err => {
//       console.log(err)
//     });

    //console.log(response);

