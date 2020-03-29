const AccuWeather = require('../services/accuWeather');
const Covid19 = require('../services/covid19')


module.exports = {

    async covid19Summary(req){
       

        let covid = new Covid19();

        let summary =  await covid.getCovid19Summary();

        return summary;
    }
        
}