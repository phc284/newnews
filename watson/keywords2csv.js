const fs = require('fs');
const Article = require('../models/Article.js');
const Continents = require('./Continents.js');
const db = require('../mongodb_config.js')

let date = new Date();
date.setDate(date.getDate()-1);
console.log(`date: ${date}`)
const yesterday = date.toJSON().split('T')[0];

// console.log(`today: ${new Date()}`)
console.log(`yesterday: ${yesterday}`)
var article2csv = async () => {
var csvfiedArticles = '_id, continent, key, title';
  // console.log(yesterday)
  await Article.find({
    crawl_date: {$gt:yesterday}
  }).exec().then( (articles) => {
    console.log(`how many articles? ${articles.length}`)
    articles.map( ({_id, country, key, title }) => {
      let continentName = '';
      for(let continent in Continents){
        if(Continents[continent].includes(country)){
          // console.log(continent)
          continentName = continent;
        }
      }
      // console.log(csvfiedArticles)
      csvfiedArticles += `\n${_id}, ${continentName}, ${key}, ${title.split(',').join('/')}`;
      // console.log(csvfiedArticles.length);
    })
    return csvfiedArticles;

  }).then( csvfiedArticles => {
    fs.writeFile('./csv/article2excel.csv', csvfiedArticles, (err) => {
      err? console.log(err) : console.log('SUCCESS: csvfied articles written');
    })
  }).catch( err => {
    console.log(err)
  })



}

article2csv();
