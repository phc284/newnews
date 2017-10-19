const Cassandra = require('cassandra-driver')

var client = new Cassandra.Client({contactPoints: ['127.0.0.1']})
client.connect(function(err, result) {
	console.log('Cassandra connected')
});

`CREATE KEYSPACE new_news_keyspace WITH replication =
	{'class': 'SimpleStrategy', 'replication_factor': 1};`
`USE new_news_keyspace;`
var query = `CREATE TABLE [ IF NOT EXISTS ] articles (
  // id text PRIMARY KEY, // *primary key
  // score int,
  // title text,
  // country text, // *primary key
  // crawl_date text,
  // url text,
  // host text,
  // text text,
  // main_image_url text,
  // sentiment float,
  // concepts map<text, float>, // text, relevance *primary key
	// PRIMARY KEY (concepts )
)`
var concept_query = concepts.reduce((string, {text, relevance})=>{
  return string + ` '${text}' : ${relevance},`;
}, '{')
query = query.slice(0,-1) + '}' // `{ 'United States' : 0.983999, 'Puerto Rico' : 0.848328, 'Latin America' : 0.670274, 'Liberal democracies' : 0.421739, 'Pacific Ocean' : 0.417309}`;
`INSERT INTO articles(id, score, title, country, crawl_date, url,
	host, text, main_image_url, sentiment, concepts) VALUES (
		${id}, ${score}, ${title}, ${country}, ${crawl_date}, ${url}, ${host},
		${text}, ${main_image_url}, ${enriched_text.sentiment.document.score},
		${concept_query}
);`

// // // // // // // // // // // // // // // // // // // // // // // // // //
// CREATE TABLE loads (
//     machine inet,
//     cpu int,
//     mtime timeuuid,
//     load float,
//     PRIMARY KEY ((machine, cpu), mtime)
// ) WITH CLUSTERING ORDER BY (mtime DESC);
// // // // // // // // // // // // // // // // // // // // // // // // // //

// INSERT INTO people.subscribers

client.execute(query).then( () => {

}).catch( () => {

})
