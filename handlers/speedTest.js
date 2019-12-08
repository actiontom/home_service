const Mongo = require('../mongo');
var speedTest = require('speedtest-net');

module.exports = {

    async speedTest(){

        let currentSpeeds = startSpeedTest();
        
        return currentSpeeds;
        }    
}

async function startSpeedTest(){

    var myPromise = async () => {

        var test = speedTest({maxTime: 5000});

        return new Promise((resolve, reject) => {
            test.on('data', data => {       
                resolve(data);
            });
            test.on('error', err => {
                reject(err);
             });
       });
    }
    
    //await myPromise
    var result = await myPromise();

    return result;    
}