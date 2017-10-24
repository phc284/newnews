const Axios = require('axios');
const Schedule = require('node-schedule');
const Header = require('../config/config.js');

/*// node-schedule time format
'second, minute, hour, dayOfMonth, month, dayOfWeek'*/
const fetchTime = '0 0 5 * * *'; //every day at 6am
const everyTwoSec = '*/2 * * * * *'

const count = 50;
const date = new Date();
const today = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-');
const returnColumn = ['id', 'title', 'author', 'text', 'url', 'crawl_date',
  'score', 'country', 'enriched_text.keywords', 'enriched_text.sentiment',
  'enriched_text.concepts', 'enriched_text.categories'].join('%2C');

// const requestURL = `https://watson-api-explorer.mybluemix.net/discovery/api/v1/`
//   + `environments/${id_envir}/collections/${id_collect}/query?`
//   + `filter=crawl_date%3C${today}` // crawl_date < today's date
//   + `&count=${count}`
//   + `&return=${returnColumn}`
//   + `&sort=-crawl_date` // sort by crawl_date
//   + `&version=${version}`

const aggregation = `https://watson-api-explorer.mybluemix.net/discovery/api/v1/`
  + `environments/${id_envir}/collections/${id_collect}/query?`
  + `filter=crawl_date%3C${today}`
  + `&aggregation=term(enriched_text.keywords.text).top_hits(10)`
  + `&count=${count}`
  + `&return=${returnColumn}`
  + `&version=${version}`


  /*
  https://watson-api-explorer.mybluemix.net/discovery/api/v1/environments/system/collections/news/
  query?filter=crawl_date%3C2017-10-16&aggregation=term(enriched_text.concepts.text).top_hits(10)&count=50&
  return=id%2Ctitle%2Cauthor%2Ctext%2Curl%2Ccrawl_date%2Cpublication_date%2Cscore%2Ccountry%2Cenriched_text.keywords
  %2Cenriched_text.sentiment%2Cenriched_text.concepts%2Cenriched_text.categories&version=2017-10-26
  */
// let requestParams = Object.assign({
//   "aggregation": 'term(enriched_text.keywords.text).top_hits(10)',
//   "filter" : `crawl_date%3C${today}`,
//   "count"  : count,
//   "return" : returnColumn,
//   "sort"   : "-crawl_date"
// }, Header);
// const cronRule = new Schedule.RecurrenceRule();
// cronRule.hour = 5;

const job = Schedule.scheduleJob(everyTwoSec, ()=>{
  console.log('two seconds have passed!')
  console.log(`today's date is: ${today}`)
  console.log(requestURL);
  // Axios.get(url).then( (resolve) => {
  //
  // }).catch( (err) => {
  //
  // })
})
