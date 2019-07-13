const MongoClient = require('mongodb').MongoClient;

module.exports = class Mongo {

constructor(){
  this.url = 'mongodb://localhost:27017';
}

async connect(conn, onSuccess, onFailure){
  try {
    var connection = await MongoClient.connect(this.url, { useNewUrlParser: true })
    this.db = connection.db('mydb')
    console.log('MongoClient Connection successfull.')
    // onSuccess()
    return connection;
  }
  catch(ex) {
    // logger.error("Error caught,", ex)
    console.log('MongoClient connection failed: ' + ex)
    //onFailure(ex)
  }
}

async insertOne(collection, data) {

  this.db.collection(collection).insertOne(data, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");     
       });
}

}

