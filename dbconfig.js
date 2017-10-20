const Cassandra = require("cassandra-driver");
const Promise = require("bluebird");

var client = new Cassandra.Client({
  contactPoints: ["127.0.0.1"],
  keyspace: "new_news"
});

client.connect(function(err, result) {
  console.log("Cassandra connected");
});

// CASSANDRA SETUP PROCESS
/*
	cqlsh

	CREATE KEYSPACE new_news WITH replication =
	{'class': 'SimpleStrategy', 'replication_factor': 1};

	USE new_news;


CREATE TABLE articles (
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
PRIMARY KEY (id, crawl_date, main_concept, country)
) WITH CLUSTERING ORDER BY (crawl_date DESC, main_concept ASC, country ASC);

	exit
*/

//https://watson-api-explorer.mybluemix.net/discovery/api/v1/environments/system/collections/news/
//query?filter=crawl_date%3C2017-10-16&aggregation=term(enriched_text.concepts.text).top_hits(10)&count=50&return=id%2Ctitle%2Cauthor%2Ctext%2Curl%2Ccrawl_date%2Cpublication_date%2Cscore%2Ccountry%2Cenriched_text.keywords%2Cenriched_text.sentiment%2Cenriched_text.concepts%2Cenriched_text.categories&version=2017-09-01
// var article_aggregate = [];
var staged_execution = [];

var WatsonTop10 = require("./watson/top_10_filter_19.js"); //STATIC TEST DATA
WatsonTop10 = WatsonTop10.aggregations[0].results;

// var key = WatsonTop10.key;
// var articles = WatsonTop10.aggregations[0].hits.hits[0];
// var {id, score, crawl_date, url, host, text, main_image_url, country, enriched_text, title} = articles;
WatsonTop10.forEach( ({key, aggregations}) => {
	var articles = aggregations[0].hits.hits.map( ({id, score, title, country,
		crawl_date, url, host, text,	main_image_url, enriched_text}) => {

		let concept_query = enriched_text.concepts.reduce((string, {text, relevance})=>{
		  return string + ` '${text}' : ${relevance},`;
		}, '{');
		concept_query = concept_query.slice(0,-1) + '}'
		// concept_query example: `{ 'United States' : 0.983999, 'Puerto Rico' : 0.848328, ...}`;

		let query = `INSERT INTO articles (id, main_concept, score, title, country, `
			+`crawl_date, url, host, text, main_image_url, sentiment, concepts) `
			+`VALUES (${id}, ${key}, ${score}, '${title}', '${country}', ${crawl_date}, `
			+`${url}, ${host}, '${text}', ${main_image_url}, `
			+`${enriched_text.sentiment.document.score}, ${concept_query});`;

    staged_execution.push(client.execute(query));

//
// 		// return  {
// 		// 	id: id,
// 		// 	main_concept: key,
// 		// 	score: score,
// 		// 	title: title,
// 		// 	country: country,
// 		// 	crawl_date: crawl_date,
// 		// 	url: url,
// 		// 	host: host,
// 		// 	text: text,
// 		// 	main_image_url: main_image_url,
// 		// 	sentiment: enriched_text.sentiment.document.score,
// 		// 	concepts: enriched_text.concepts.map(({text, relevance})=>{
// 		// 		return {text: text, relevance: relevance};
// 		// 	})
// 		// };
	});
  console.log(key)
	// article_aggregate = article_aggregate.concat(articles);
});


Promise.all(staged_execution).then( () => {
	console.log(`STAGED EXECUTION COMPLETE: ${staged_execution.length} articles successfully inserted into articles table`);

}).catch( (error) => {
	console.log(`STAGED EXECUTION FAIL TO RESOLVE`, error);
})
