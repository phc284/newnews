const Axios = require('axios');
const Schedule = require('node-schedule');
const mongoose = require('mongoose')
const dbconnection = require('../mongodb_config')
mongoose.Promise = global.Promise;

const Article = require('../models/Article.js');
const Key = require('../models/Key.js');
const {url, username, password, version} = require('../config/config.js');
const Continents = require('./Continents.js');


/*// node-schedule time format
'second, minute, hour, dayOfMonth, month, dayOfWeek'*/
const fetchTime = '0 0 5 * * *'; //every day at 6am
const everyTwoSec = '*/2 * * * * *'

const date = new Date();
const today = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-');
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()-1].join('-');

for(let continentName in Continents){

  var countryList = Continents[continentName];

  Axios.get(url, {
    auth: {
      username: username,
      password: password
    },

    params: {
      aggregation: `filter(crawl_date>${yesterday})`
        + `.filter(country::[${countryList.join('|')}])`
        + `.term(enriched_text.concepts.text).top_hits(30)`,
      count: 0,
      version: version
    }

  }).catch( (error) => {
    console.log('AXIOS REQUEST FAIL: ',error);

  }).then ( ({data}) => {
    // const data = require('./top20_unfiltered.js');
    return Promise.all( data.aggregations[0].aggregations[0].aggregations[0].results.map( ({key, matching_results, aggregations}) => {

      var aggregateByKey = {
        continent: continentName,
        key: key,
        matching_results: matching_results,
        query_date: today,
        articles: Promise.all( aggregations[0].hits.hits.map( ({id, score, title, country, crawl_date, url, host, text, main_image_url, enriched_text}) => {
          return Article.findOneAndUpdate({id:id}, {
            id: id,
            key: key,
            score: score,
            title: title,
            country: country,
            crawl_date: crawl_date,
            url: url,
            host: host,
            text: text,
            main_image_url: main_image_url,
            sentiment_score: enriched_text.sentiment.document.score,
            concepts: enriched_text.concepts,
            category: enriched_text.categories[0]? enriched_text.categories[0].label : enriched_text.categories[0]
          }, {upsert:true})
        }) )
      }

      return Key.findOneAndUpdate({ continent: continentName,
        key: key,
        query_date: today }, aggregateByKey, {upsert: true});
      })
    )

  }).then( (rows) => {
    console.log(`SUCCESS: ${rows.length} concepts saved`)

  }).catch( (error) => {
    console.log(error)
  });

//       // .catch( (error) => {
//       //   console.log('ARTICLES INSERTION FAIL: ',error)
//       //
//       // })
//       .then( (article_ids) => {
//         // console.log('article_ids = ', article_ids);
//         let key = {
//           key: key,
//           matching_results: matching_results,
//           continent: continentName,
//           query_date: today,
//           article_ids: article_ids
//         };
//
//         return Key.findOneAndUpdate({key: key, continent: continent, query_date:query_date}, key, {upsert:true});
//
//       }).then( (keySaved) => {
//         console.log('KEY SAVED: ', keySaved._id);
//
//       }).catch( (error) => {
//         console.log("KEY INSERTION FAIL: ",error);
//
//       });
//     })
//
//
//   })

};


// saving file
// fs.open(`./${continentName}_top20_filtered.js`,'w', (err, result) => {
//   if(!err){
//     fs.writeFile(`./${continentName}_top20_filtered.js`, JSON.stringify({results:staged_articles},null,2), (err) => {
//       err?  console.log(err) : console.log(`SUCCESS: ${staged_articles.length} articles written to ${continentName}_top20_filtered.js`);
//     })
//   } else {
//     console.log('FILE OPEN FAIL',err);
//   }
// })

// static files to mongoDB
// const continents = ['Africa', 'Asia', 'Europe', 'NorthAmerica', 'Oceania', 'SouthAmerica'];

//
// continents.map( (continentName) => {
//   var articles = require(`./${continentName}_top20_filtered.js`);
//
//   Promise.all( articles.results.map( (article) => {
//     return Article.findOneAndUpdate({id: article.id}, article, {upsert:true})
//     // let newArticle = new Article(article);
//     // return newArticle.save()
//     // .catch( (error) => {
//     //   console.log(error)
//     //   });
//     // })
//     })
//   );
//
// });


// const cronRule = new Schedule.RecurrenceRule();
// cronRule.hour = 5;

// const job = Schedule.scheduleJob(everyTwoSec, ()=>{
//   console.log('two seconds have passed!')
//   console.log(`yesterday's date is: ${yesterday}`)
//   console.log(requestURL);
//   // Axios.get(url).then( (resolve) => {
//   //
//   // }).catch( (err) => {
//   //
//   // })
//   console.log(typeof new Date())
// })
