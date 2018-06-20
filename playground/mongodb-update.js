const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Messibarcelona', (err, client) => {
    if(err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Messibarcelona');

    db.collection('statistics').findOneAndUpdate({
        _id: new ObjectID('5b01471ecc075b93a067aad8')   // filter
    }, {
        $set: {                                         // update  $set - mongoDB operator
            years: '2000/2001'
        }
    }, {
        returnOriginal: false                           // options
    }).then((result) => {
        console.log(result);
    })

    // client.close();
})