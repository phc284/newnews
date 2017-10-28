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

exports.retrieveByKey = async (ctx, next) => {
  var yesterday = new Date();
  yesterday.setDate( yesterday.getDate() - 1 );

  // let conceptId = ctx.params.conceptId;
  await Article.find({key: ctx.params.keyId}).then( (rows) => {
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
      var MAX_CONCEPT_NUMBER = article.concepts.length < 10? article.concepts.length : 10;
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
