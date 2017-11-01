const Key = require('../models/Key.js');
const Article = require('../models/Article.js');

let date = new Date();
date.setDate(date.getDate()-1);
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-');

exports.retrieveKeys = async (ctx, next) => {
  await Key.find({query_date: {$gt:yesterday}}).then( (keyConcepts) => {
    ctx.body = keyConcepts;
  })
}
//
//     return Promise.all( keyConcepts.map( ({article_ids}) => {
//       return Article.find({_id:article_ids[0]})
//     }) );
//
//   }).then((keyObj) => {
//   //   ctx.body = keyObj;
//
//   })//.then( ({  }) => {
//   //
//   // }).catch( (error) => {
//   //   console.log('inside of key-handler.js retrieveKeys fail', error);
//   // })
// }
