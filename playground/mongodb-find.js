const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Messibarcelona', (err, client) => {
    if(err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Messibarcelona');

    // db.collection('statistics').find().count().then((count) => {
    //    console.log(`statistics count: ${count}`);     
    // }, (err) => {
    //     console.log('Unable to fetch statistics', err);
    // });

    db.collection('statistics').find({completed: true}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));     
     });

    // client.close();
})