const AccuWeather = require('../services/accuWeather');


module.exports = {

    async currentWeather(req){

        let locationKey = req.query.locationKey;

        let accu = new AccuWeather();

        let currentWeather =  await accu.getCurrentConditions(locationKey);

        return currentWeather;
    }
        
}