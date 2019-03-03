var mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("blogapp");
    dbo.collection('users').findOne({id: 10}, function(err, result){
        if(err) throw err;
        console.log(result);
     });
    db.close();
})
