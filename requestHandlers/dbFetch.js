const Cassandra = require('cassandra-driver');
const Promise = require('bluebird');
const dataParser = require('./dataParser');
const Article = require('../models/Article.js');
const mongodb = require('../mongodb_config.js');

var client = new Cassandra.Client({
  'contactPoints' : ['localhost'],
  'keyspace' : 'new_news',
});

var getArticlesForRequestedConcept = function(requestedConcept) {
  let query = 'SELECT * FROM articles;';
  return client.execute(query)
    .then((response) => { return response.rows; })
    .then((response) => { return dataParser.filterArticlesByKeyword(response, requestedConcept); });
}

var getConceptsByContinent = () => {
  // let query = 'SELECT country, concepts FROM articles;';
  return Article.find({},'country concepts')
    .then((columns) => {
      return dataParser.flattenConcepts(columns);
    })
  // return client.execute(query)
  //   .then((response) => { return response.rows; })
  //   .then((response) => { return dataParser.flattenConcepts(response) });
}

var getHeadlines = function () {
  let query = 'SELECT title, url FROM articles;';
  return client.execute(query)
    .then((response) => { return response.rows})
    .then((response) => { return dataParser.filterArticlesHeadline(response)})
}

module.exports = {
  getArticlesForRequestedConcept: getArticlesForRequestedConcept,
  getConceptsByContinent: getConceptsByContinent,
  getHeadlines: getHeadlines
}
