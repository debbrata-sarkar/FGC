const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Messibarcelona', (err, client) => {
    if(err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Messibarcelona');

    // deleteMany
    db.collection('statistics').deleteMany({years: '2018/2019'}).then((result) => {
        console.log(result);
    })

    // deleteOne
    // db.collection('statistics').deleteOne({years: '2018/2019'}).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('statistics').findOneAndDelete({_id: new ObjectID('5b01471ecc075b93a067aad8')}).then((result) => {
    //     console.log(result);
    // })

    // client.close();
})