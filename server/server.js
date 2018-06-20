var express = require('express');                       // LIBRARY IMPORTS
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');              // LOCAL IMPORTS
var {Fgc} = require('./models/fgc');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST FGC
app.post('/fgcs', (req, res) => {
    var fgc = new Fgc({
        text: req.body.text
    });

    fgc.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET FGC
app.get('/fgcs', (req, res) => {
    Fgc.find().then((fgcs) => {
        res.send({fgcs});
    }, (e) => {
        res.status(400).send(e);
    })
});

// GET tgcs by id
app.get('/fgcs/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.send(404).send();
    }

    Fgc.findById(id).then((fgc) => {
        if(!fgc) {
            res.status(404).send();
        }
        res.send({fgc});
    }).catch((e) => {
        res.status(400).send();
    });
});

// POST /USER
// app.post('/users', (req, res) => {
//     var body = _.pick(req.body, ['email', 'password']);
//     var user = new User(body);

//     user.save().then((user) => {
//         res.send(user);
//     }).catch((e) => {
//         re.status(400).send(e);
//     })
// })

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
})

module.exports = {app};