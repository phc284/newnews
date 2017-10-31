const Key = require('../models/Key.js');
const Article = require('../models/Article.js');

let date = new Date();
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()-1].join('-');

let date = new Date();
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()-1].join('-');

exports.retrieveKeys = async (ctx, next) => {
  await Key.find({query_date: {$gt:yesterday}}).then( (keyConcepts) => {
    var topArticles = keyConcepts.map(({article_ids}) => {
      return Article.find({id: article_ids[0]});
    });
    ctx.body = {key: keyConcepts, topArticles: topArticles};
  }).catch( (error) => {
    console.log('inside of key-handler.js retrieveKeys fail', error);
  })
}
