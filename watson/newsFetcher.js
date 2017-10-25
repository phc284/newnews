const Axios = require('axios');
const Schedule = require('node-schedule');
const {url, username, password, version} = require('../config/config.js');
const Continents = require('./Continents.js')

/*// node-schedule time format
'second, minute, hour, dayOfMonth, month, dayOfWeek'*/
const fetchTime = '0 0 5 * * *'; //every day at 6am
const everyTwoSec = '*/2 * * * * *'

const date = new Date();
const yesterday = [date.getFullYear(), date.getMonth()+1, date.getDate()-1].join('-');

var continentName = 'AXIOS_TESTRUN'
var countryList = Continents['Asia']

Axios.get(url, {
  auth: {
    username: username,
    password: password
  },

  params: {
    aggregation: `filter(crawl_date>${yesterday})`
      + `.filter(country::[${countryList.join('|')}])`
      + `.term(enriched_text.concepts.text).top_hits(20)`,
    count: 0,
    version: version
  }

}).then ( ({data}) => {
  var staged_articles = [];
  data.aggregations[0].aggregations[0].aggregations[0].results.map( ({key, aggregations}) =>{
    aggregations[0].hits.hits.map( ({id, score, title, country, crawl_date,
      url, host, text, main_image_url, enriched_text}) => {
      staged_articles.push({
        id:id,
        key:key,
        score:score,
        title:title,
        country:country,
        crawl_date:crawl_date,
        url:url,
        host:host,
        text:text,
        main_image_url:main_image_url,
        sentiment_score:enriched_text.sentiment.document.score,
        concepts: enriched_text.concepts,
        category:enriched_text.categories[0]
      });
    });
  })

  //saving file
  fs.open(`./${continentName}_top20_filtered.js`,'w', (err, result) => {
    if(!err){
      fs.writeFile(`./${continentName}_top20_filtered.js`, JSON.stringify({results:staged_articles},null,2), (err) => {
        err?  console.log(err) : console.log(`SUCCESS: ${staged_articles.length} articles written to ${continentName}_top20_filtered.js`);
      })
    } else {
      console.log('FILE OPEN FAIL',err);
    }
  })

}).catch( (error) => {
  console.log(error);
})


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
