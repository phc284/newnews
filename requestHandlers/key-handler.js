const Key = require('../models/Key.js');

let date = new Date();
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()-1].join('-');

exports.retrieveKeys = async (ctx, next) => {
  await Key.find({query_date: {$gt:yesterday}}) //.where('crawl_date').gt(yesterday)
  .then( (rows) => {
  	console.log('rows: ', rows);
    ctx.body = rows;
  }).catch( (error) => {
    console.log('inside of key-handler.js retrieveKeys fail', error);
  })
}
