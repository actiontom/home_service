const Mongo = require('../mongo');
var speedTest = require('speedtest-net');

module.exports = {

    async speedTest(req){

        let type = null;

        if(req && req.query && req.query.type){

            type = req.query.type;
        }
        else{

            type = 'automated';
        }

        let currentSpeeds = await startSpeedTest(type);
        
        return currentSpeeds;
        }    
}

async function startSpeedTest(type){

    var myPromise = async () => {

        var test = speedTest({maxTime: 5000});

        return new Promise((resolve, reject) => {
            test.on('data', data => {
                let d = new Date();
                    data.time = d;
                    data.type = type;                    
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