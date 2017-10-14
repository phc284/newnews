const Schedule = require('node-schedule');
var login = require('../config/config.js');

// time format = 'second [0,59], minute [0,59], hour[0,23], day of month[1,31], month[1,12], day of week[0,7]'
const midnight = '0 0 5 * * *';
const everyTwoSec = '*/2 * * * * *'
const id_envir = 'system';
const id_collect = 'news';
const version = '2017-09-01';
const count = 50;
const url = `https://watson-api-explorer.mybluemix.net/discovery/api/v1/` +
            `environments/${id_envir}/collections/${id_collect}/query?` +
            `count=${count}` +
            `&version=${version}`;

const cronRule = new Schedule.RecurrenceRule();
cronRule.hour = 5;

const job = Schedule.scheduleJob(everyTwoSec, ()=>{
  console.log('two seconds have passed!')
  console.log(url);
  // Axios.get(url).then( (resolve) => {
  //
  // }).catch( (err) => {
  //
  // })
})
