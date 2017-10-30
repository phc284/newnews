const Article = require('../models/Article.js');
const Key = require('../models/Key.js');

let date = new Date();
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()-1].join('-');

exports.retrieveArticles = async (ctx, next) => {
  await Article.find({crawl_date: {$gt:yesterday}})//.where('crawl_date').gt(yesterday)
  .then( articles => {
    ctx.body = articles;
  }).catch( (error) => {
    console.log('article-handler.retrieveArticles fail: ', error);
  })
}

exports.retrieveByKey = async (ctx, next) => {
  await Key.find( {key: ctx.params.key.toLowerCase(), query_date: {$gt:yesterday} } )
  .populate('article_ids').then( (populatedKey) => {
    console.log(`article-handler.retrieveByKey, '${ctx.params.key}' key populated with`)
    ctx.body = populatedKey;
  }).catch( error => {
    console.log('article-handler.retrieveByKey fail: ', error);
  })
}

exports.retrieveByConcept = async( ctx, next ) => {
  await Article.find({crawl_date: {$gt:yesterday}}) //.where('crawl_date').gt(yesterday)
  .then( rows => {
    ctx.body = rows.filter( (article) => {
      var MAX_CONCEPT_NUMBER = article.concepts.length < 5? article.concepts.length : 5;
      for(let i=0; i<MAX_CONCEPT_NUMBER; i++){
        if(article.concepts[i].text.toLowerCase() === ctx.params.concept.toLowerCase()){
          return true;
        }
      }
      return false;
    });
  });
}

exports.retrieveHeadlines = async( ctx, next ) => {
  await Article.find({crawl_date: {$gt:yesterday}}, 'title url') //.where('crawl_date').gt(yesterday)
    .then((columns) => {
      ctx.body = {'headlines': columns};
    }).catch( (error) => {
      console.log('article-handler.js retrieveHeadlines error: ',error);
    })
}
