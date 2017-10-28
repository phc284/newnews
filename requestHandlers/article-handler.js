const Article = require('../models/Article.js');

exports.retrieve24hr = async (ctx, next) => {
  var date = new Date();
  date.setDate( date.getDate() - 1 );
  const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-');

  ctx.articles = await Article.find({}).where('crawl_date').gt(yesterday);

  await next();
}

exports.retrieveArticles = (ctx, next) => {
  ctx.body = ctx.articles;
}

exports.retrieveByKey = async (ctx, next) => {
  var yesterday = new Date();
  yesterday.setDate( yesterday.getDate() - 1 );

  // let conceptId = ctx.params.conceptId;
  await Article.find({key: ctx.params.keyId}).where('crawl_date').gt(yesterday).then( (rows) => {
    /*TODO: add only today's data
    */
    console.log('inside of article-handler.js: ', rows);
    ctx.body = rows;
  }).catch( (error) => {
    ctx.body = error;
  })
}

exports.retrieveByConcept = async( ctx, next ) => {
  var yesterday = new Date();
  yesterday.setDate( yesterday.getDate() - 1 );

  await Article.find().then( rows => {
    let filtered = rows.filter( (article) => {
      var MAX_CONCEPT_NUMBER = article.concepts.length < 5? article.concepts.length : 5;
      for(let i=0; i<MAX_CONCEPT_NUMBER; i++){
        if(article.concepts[i].text.toLowerCase()=== ctx.params.conceptId.toLowerCase()){
          return true;
        }
      }
      return false;
    });
    ctx.body = filtered;
  });
}
