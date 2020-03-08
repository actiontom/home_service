const AccuWeather = require('../services/accuWeather');

module.exports = {

    async searchCity(req){

        let cityText = req.query.city;

        let weather = new AccuWeather();

        let cityInformation =  await weather.searchCity(cityText);

        return cityInformation;
    }
        
}