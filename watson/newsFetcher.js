var Axios = require('axios');
const Schedule = require('node-schedule');
var login = require('../config/config.js');

/*
// node-schedule time format
don't care = *
second = [0,59]
minute = [0,59]
hour = [0,23]
day of month = [1,31]
month = [1,12]
day of week = [0,7]
*/
const midnight = '0 0 5 * * *';
const everyTwoSec = '*/2 * * * * *'

const id_envir = 'system';
const id_collect = 'news';
const version = '2017-09-01';
const count = 50;
let date = new Date();
const today = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-');
const returnColumn = ['id', 'title','author','text','url',
  'crawl_date','publication_date','score','country',
  'enriched_text.keywords','enriched_text.sentiment','enriched_text.entities',
  'enriched_text.concepts','enriched_text.categories'].join('%2C');

const requestURL = `https://watson-api-explorer.mybluemix.net/discovery/api/v1/`
  + `environments/${id_envir}/collections/${id_collect}/query?`
  + `filter=crawl_date%3C${today}` // crawl_date < today's date
  + `&count=${count}`
  + `&return=${returnColumn}`
  + `&sort=-crawl_date` // sort by crawl_date
  + `&version=${version}`

const aggregation = 'term(enriched_text.keywords.text,count:10)'
`https://watson-api-explorer.mybluemix.net/discovery/api/v1/
environments/system/collections/news/query?
filter=crawl_date%3C2017-10-16
&aggregation=term(enriched_text.keywords.text%2C%20count%3A10)
&count=50
&return=${returnColumn}
&version=2017-09-01`
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
