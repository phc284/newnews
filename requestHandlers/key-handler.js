const Key = require('../models/Key.js');
const Article = require('../models/Article.js');

let date = new Date();
date.setDate(date.getDate()-1);
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-');

exports.retrieveKeys = async (ctx, next) => {
  var keysSave = [];
  await Key.find({ query_date: {$gt:yesterday} }).then( (keyConcepts) => {
    keysSave = keyConcepts;
    return Promise.all( keyConcepts.map( ({article_ids}) => {
      return Article.findOne({_id:article_ids})
    }) )

  }).then( (topArticles) => {
    ctx.body = {
      keys: keysSave,
      topArticles: topArticles
    }
  })
}
