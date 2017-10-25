const fs = require('fs');

const continents = ['Africa','Asia','Europe','NorthAmerica','SouthAmerica','Oceania'];

continents.map( (continent) => {
  console.log(`reading ${continent} file...`)
  var targetFile = require(`./watson/${continent}_top20_filtered.js`);

  var csvString = 'id, key, score, title, country, crawl_date, host,'
    + ' sentiment_score, concept, concept_relevance,'

  targetFile.results.map( ({id,key,score,title,country,crawl_date,url,host,
    main_image_url,sentiment_score,concepts,category}) => {
    concepts.map( (concept) => {
      csvString += `\n ${id}, ${key.split(',').join(' ')}, ${score}, ${title.split(',').join(' ')},`
        + ` ${country}, ${crawl_date}, ${host.split(',').join(' ')},`
        + ` ${sentiment_score}, ${concept.text.split(',').join(' ')},`
        + ` ${concept.relevance}`;
    });
  });

  fs.open(`./${continent}_top20_filtered.js`,'w', (err, result) => {
    if(!err){
      fs.writeFile(`./watson/csv/${continent}_top20_filtered.csv`, csvString, (err) => {
        if(err){
          console.log(err);
        } else {
          console.log(`SUCCESS: ${targetFile.results.length} articles written
            to ${continent}_top20_filtered.js`);
        }
      })
    } else {
      console.log('FILE OPEN FAIL', err);
    }
  });

})
