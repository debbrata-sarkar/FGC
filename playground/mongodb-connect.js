const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/FGC', (err, client) => {
    if(err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MOngoDB server');
    const db = client.db('FGC');

    db.collection('fgc').insertOne({
        text: 'starting building API for FGC',
        completed: false        
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert statistics', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
})