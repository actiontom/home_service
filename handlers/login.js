const Mongo = require('../mongo');

module.exports = {

    async login(req){
        var userName = req.query.userName ? req.query.userName : '';
        var password = req.query.password ? req.query.password : '';

        let db = new Mongo();
    
        await db.connect();

        let result = await db.login(userName, password);
       
        return result;        
        }    
}