//
exports.inserData=(insertDBName,myCollectionName,myinserData)=>{
    const MongoClient = require('mongodb').MongoClient;
    const assert = require('assert');

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = insertDBName;

    // Create a new MongoClient
    const client = new MongoClient(url,{useUnifiedTopology:true});

    // Use connect method to connect to the Server
    client.connect(function(err) {
    if(err) console.log('Connect fail!')
    else console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection(myCollectionName);
    // Insert some documents
    collection.insertMany(myinserData, function(err, result) {
        if(err) console.log('Inserte fail!')
        else console.log("Inserted 3 documents into the collection")
        console.log(result)
        client.close();
    });
    });
}