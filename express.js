module.exports = class Expresss {

constructor(){  
    this.express = require('express');
    this.app = this.express();
    this.port =  3000;
}

start(){

this.app.get('/api/greet', (req, res) => {
    
    var name = req.query.name ? req.query.name : '';
    res.send('Hello ' + name);
});

this.app.get('/api/name', (req, res) => res.send('Thomas'));

this.app.listen(this.port, () => console.log(`home_service app listening on port ${this.port}!`));

}


}