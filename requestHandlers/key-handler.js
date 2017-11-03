const Key = require('../models/Key.js');
const Article = require('../models/Article.js');
const Continents = require('../watson/Continents.js');

let date = new Date();
date.setDate(date.getDate()-2);
const yesterday = date.toJSON().split('T')[0];


exports.retrieveKeys = async (ctx, next) => {
  console.log(yesterday)
  var keys = [];
  var topArticles = [];
  await Key.find({
    query_date: {$gte:yesterday}
  }).then( (keyConcepts) => {
    keys = keyConcepts;
    for(let continentName in Continents){
      topArticles = topArticles.concat( keyConcepts.filter( (keyConcept) => {
        return keyConcept.continent === continentName;
      }).slice(0,3).map( ({article_ids}) => {
        return Article.findOne({_id:article_ids[0]});
      }) );
    }
    return Promise.all(topArticles);
  }).then( (articles) => {
    console.log(articles.length)
    ctx.body = {
      keys: keys,
      topArticles: articles
    }
  })
}
