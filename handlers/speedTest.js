const Mongo = require('../mongo');
var speedTest = require('speedtest-net');

module.exports = {

    async speedTest(){

        let currentSpeeds = await startSpeedTest();
        
        return currentSpeeds;
        }    
}

async function startSpeedTest(){

    var myPromise = async () => {

        var test = speedTest({maxTime: 5000});

        return new Promise((resolve, reject) => {
            test.on('data', data => {
                let d = new Date();
                    data.time = d;
                    saveData('speedTest', data)      
                    resolve(data);
            });
            test.on('error', err => {
                saveData('speedTestError', err)
                reject(err);
             });
       });
    }

    //await myPromise
    var result = await myPromise();

    return result;
}

// Helper functions.
function saveData(table, obj) {

    let db = new Mongo();
    
    db.connect().then(()=>{
        db.insertOne(table, obj);
    });
}