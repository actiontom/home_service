const Covid19 = require('../services/covid19')


module.exports = {

    async covid19Countries(req){
       

        let covid = new Covid19();

        let summary =  await covid.getCovid19DayOne();

        return summary;
    }
        
}