const fs = require('fs');
const Article = require('../models/Article.js');
const Continent = require('./Continents.js');

let date = new Date();
date.setDate(date.getDate()-1);
const yesterday = date.toJSON().split('T')[0];

var article2csv = async () => {
  var csvfiedArticles = '_id, continent, key, title\n';
  await Article.find({crawl_date: {$gt:yesterday}}).then( (articles) => {
    articles.map( ({_id, country, key, title }) => {
      let continentName = '';
      for(let continent in Continents){
        if(Continents[continent].includes(country)){
          continentName = continent;
        }
      }
      csvfiedArticles += `${_id}, ${continentName}, ${key}, ${title.split(',').join()}\n`;
      console.log(csvfiedArticles.length);
    })
  })

  await fs.writeFile('./csv/article2csv.csv', csvfiedArticles, (err2) => {
    err2?  console.log(err2) : console.log(`SUCCESS: csvfied articles written`);
  })
  // await fs.open('./csv/article2csv.csv','w', (err, result) => {
  //   if(!err){
  //
  //   } else {
  //     console.log('FILE OPEN FAIL', err);
  //   }
  // })



}

article2csv();
