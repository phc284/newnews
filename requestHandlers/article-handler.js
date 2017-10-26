const Article = require('../models/Article.js');

exports.retrieveArticles = async (ctx, next) => {
  var yesterday = new Date();
  yesterday.setDate( yesterday.getDate() - 1 );

  await Article.find({}).where('crawl_date').gt(yesterday).then( (rows) => {
    ctx.body = rows;
  }).catch( (error) => {
    ctx.body = error;
  })

}

exports.retrieveByConcept = async (ctx, next) => {
  var yesterday = new Date();
  yesterday.setDate( yesterday.getDate() - 1 );

  let conceptId = ctx.params.conceptId;
  await Article.find({key: conceptId}).then( (rows) => {
    ctx.body = rows;
  }).catch( (error) => {
    ctx.body = error;
  })
}
