var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var url = "mongodb://<debu-DB>:<9614447994debu>@ds163530.mlab.com:63530/fgc";
mongoose.connect(process.env.url || 'mongodb://localhost:27017/FGC');

module.exports = {mongoose};