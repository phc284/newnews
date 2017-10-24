const Cassandra = require('cassandra-driver');
const Promise = require('bluebird');
const dataParser = require('./dataParser');

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

var getConceptsByContinent = function() {
  let query = 'SELECT country, concepts FROM articles;';
  return client.execute(query)
    .then((response) => { return response.rows; })
    .then((response) => { return dataParser.flattenConcepts(response) });
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
