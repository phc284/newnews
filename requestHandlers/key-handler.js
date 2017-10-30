const Key = require('../models/Key.js');

exports.retrieveKeys = async (ctx, next) => {
  await Key.find({crawl_date: {$gt:yesterday}}) //.where('crawl_date').gt(yesterday)
  .then( (rows) => {
    ctx.body = rows;
  }).catch( (error) => {
    console.log('inside of key-handler.js retrieveKeys fail', error);
  })
}
