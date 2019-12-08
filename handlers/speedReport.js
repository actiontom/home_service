const Mongo = require('../mongo');

module.exports = {

    async speedReport(req){

        let beginDate = req.query.beginDate ? req.query.beginDate : '';
        let endDate = req.query.endDate ? req.query.endDate : '';
        let report = await getReport(beginDate, endDate);
        
        return report;    
        }
    
}

async function getReport(fromDate = null, toDate = null){

    let beginDate = Date();
    let endDate = Date();
    let date = new Date();  
  
    if (fromDate === null || toDate === null || fromDate === "" || toDate === ""){
      beginDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + 'T' + '00' + ':' + '00' + ':00.000+00:00' ;
      endDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + 'T' + '23' + ':' + '59' + ':00.000+00:00' ;
    }
    else {
      beginDate = fromDate;
      endDate = toDate;
    }
      let db = new Mongo();
  
      await db.connect();     
  
      let reportData = []; 
      let data = await db.findDateRange('speedTest', beginDate, endDate); 
  
      data.forEach(element => {
          let obj = {
              time: element.time,
              id: element._id,
              uploadSpeed: element.speeds.upload,
              downloadSpeed: element.speeds.download
          };
          reportData.push(obj);        
      });
  
      return reportData;
     
  }