var express = require('express');                       // LIBRARY IMPORTS
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');              // LOCAL IMPORTS
var {Fgc} = require('./models/fgc');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// POST FGC
app.post('/fgc', (req, res) => {
    var fgc = new Fgc({
        text: req.body.text
    });

    fgc.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
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

app.listen(3000, () => {
    console.log('Started port on 3000');
})

module.exports = {app};