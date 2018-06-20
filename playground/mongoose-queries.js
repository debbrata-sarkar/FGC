const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Fgc} = require('./../server/models/fgc');

var id = "5b2a2247b891d6da11038957111";

if(!ObjectId.isValid(id)) {
    console.log("ID is not valid");
}

// Fgc.find({
//     _id: id
// }).then((fgcs) => {
//     console.log('FGC by find', fgcs)
// });

// Fgc.findOne({
//     _id: id
// }).then((fgc) => {
//     console.log("FGC by findOne", fgc);
// });

Fgc.findById(id).then((fgc) => {
    if(!fgc) {
        return console.log("Id not find");
    }
    console.log("FGC by id", fgc);
}).catch((e) => {
    console.log(e);
})