const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/app';

mongoose.connect(mongoURI);
var mongodb = mongoose.connection;
mongodb.once('open', function(){
  console.log('Mongodb connection open');
});

module.exports = mongodb;
