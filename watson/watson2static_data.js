var continentName = 'Oceania';

const continent_Top20 = require(`./${continentName}_top20.js`);
var staged_articles = [];
continent_Top20.aggregations[0].aggregations[0].aggregations[0].results.map( ({key, aggregations}) =>{
  aggregations[0].hits.hits.map( ({id, score, title, country, crawl_date, url, host, text, main_image_url, enriched_text}) => {
    staged_articles.push({
      id:id,
      key:key,
      score:score,
      title:title,
      country:country,
      crawl_date:crawl_date,
      url:url,
      host:host,
      text:text,
      main_image_url:main_image_url,
      sentiment_score:enriched_text.sentiment.document.score,
      concepts: enriched_text.concepts,
      category:enriched_text.categories[0]
    });
  });
})
// console.log(staged_articles.length);
fs.writeFile(`./watson/${continentName}_top20_filtered.js`, JSON.stringify({results:staged_articles},null,2), (err) => {
  if(err){
    console.log(err);
  } else {
    console.log(`SUCCESS: ${staged_articles.length} articles written to ${continentName}_top20_filtered.js`);
  }
})
