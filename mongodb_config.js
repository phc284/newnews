const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/app';
// const mongoURI = 'mongodb://newnews:newnews@ds235785.mlab.com:35785/newnews';
mongoose.connect(mongoURI, { useMongoClient: true });
var mongodb = mongoose.connection;
mongodb.once('open', function(){
  console.log('Mongodb connection open');
});

module.exports = mongodb;
