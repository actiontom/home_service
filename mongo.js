const MongoClient = require('mongodb').MongoClient;

module.exports = class Mongo {

constructor(){
  this.url = 'mongodb://localhost:27017';  
  this.connect();
  this.dbo;
  this.db;
}

connect() {

 MongoClient.connect(this.url, {useNewUrlParser: true }, (err, db) => {
        if (err) throw err;
        this.dbo = db.db("mydb");
        console.log("connected to Mongo db.");
      });  
}

insert() {

   var myobj = { name: "Thomas2", surname: "Riley2" };
   this.dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
         // this.db.close();
        });
}

}

