const Mongo = require('../mongo');

module.exports = {

    greeting(req){
        var name = req.query.name ? req.query.name : '';
        let db = new Mongo();
    
        db.connect().then(()=>{
        db.insertOne('greet', req.query);
        });
        return ('Hi there ' + name);
        }    
}