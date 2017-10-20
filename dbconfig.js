const Cassandra = require('cassandra-driver')
const Promise = require('bluebird');

var client = new Cassandra.Client({contactPoints: ['127.0.0.1']})

client.connect(function(err, result) {
	console.log('Cassandra connected')
});

// CASSANDRA SETUP PROCESS
/*
	cqlsh

	CREATE_KEYSPACE new_news WITH replication =
	{'class': 'SimpleStrategy', 'replication_factor': 1};

	USE new_news;

	CREATE TABLE [ IF NOT EXISTS ] articles (
	  id text,
		main_concept text,
	  score int,
	  title text,
	  country text,
	  crawl_date text,
	  url text,
	  host text,
	  text text,
	  main_image_url text,
	  sentiment float,
	  concepts map<text, float>,
		PRIMARY KEY (id, main_concept, crawl_date, country)
	) WITH CLUSTERING ORDER BY (crawl_date DESC);

	exit
*/

// var article_aggregate = [];
var staged_execution = [];

var WatsonTop10 = require('./watson/top_10_filtered.js'); //STATIC TEST DATA
WatsonTop10 = WatsonTop10.aggregations[0].aggregations[0].results

WatsonTop10.forEach( ({key, aggregations}) => {
	var articles = aggregations[0].hits.hits.map( ({id, score, title, country,
		crawl_date, url, host, text,	main_image_url, enriched_text}) => {

		let concept_query = concepts.reduce((string, {text, relevance})=>{
		  return string + ` '${text}' : ${relevance},`;
		}, '{');
		concept_query = query.slice(0,-1) + '}'
		// concept_query example: `{ 'United States' : 0.983999, 'Puerto Rico' : 0.848328, ...}`;

		let query = `INSERT INTO articles(id, main_concept, score, title, country,
			crawl_date, url, host, text, main_image_url, sentiment, concepts)
			VALUES ( ${id}, ${key}, ${score}, ${title}, ${country}, ${crawl_date},
			${url}, ${host}, ${text}, ${main_image_url},
			${enriched_text.sentiment.document.score}, ${concept_query});`

		staged_execution.push(client.execute(query));

		// return  {
		// 	id: id,
		// 	main_concept: key,
		// 	score: score,
		// 	title: title,
		// 	country: country,
		// 	crawl_date: crawl_date,
		// 	url: url,
		// 	host: host,
		// 	text: text,
		// 	main_image_url: main_image_url,
		// 	sentiment: enriched_text.sentiment.document.score,
		// 	concepts: enriched_text.concepts.map(({text, relevance})=>{
		// 		return {text: text, relevance: relevance};
		// 	})
		// };
	});
	// article_aggregate = article_aggregate.concat(articles);
});

Promise.all(staged_execution).then( () => {
	console.log(`STAGED EXECUTION COMPLETE: ${staged_execution.length} articles successfully inserted into articles table`);

}).catch( () => {
	console.log(`STAGED EXECUTION FAIL TO RESOLVE`);
})
