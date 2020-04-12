const Covid19 = require('../services/covid19')


module.exports = {

    async covid19DayOne(req){
       

        let covid = new Covid19();
        let country = req.query.country;
        let status = req.query.status;

        let summary =  await covid.getCovid19DayOne(country, status);

        return summary;
    }
        
}