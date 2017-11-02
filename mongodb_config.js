const mongoose = require('mongoose');
const mongoURI = 'mongodb://newnews:newnews@ds141185.mlab.com:41185/newnews';
// const mongoURI = 'mongodb://localhost/app';

mongoose.connect(mongoURI, { useMongoClient: true });
var mongodb = mongoose.connection;
mongodb.once('open', function(){
  console.log('Mongodb connection open');
});

module.exports = mongodb;

// const mongoURI = 'mongodb://newnews:newnews@ds235785.mlab.com:35785/newnews'; // johnathan's mlab
