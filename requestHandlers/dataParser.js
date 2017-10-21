/*
{ 
  id: 'lIKiLB2A9W3ur3UMOLum61QalvHXgTtPMtKN5y0nbDVNTMnKjD3pWIx1oA6lQt_X',
  score: 1,
  crawl_date: '2017-10-04T01:59:51Z',
  url: 'http://www.purduesports.com/sports/w-volley/spec-rel/100317aaa.html',
  host: 'purduesports.com',
  text: 'Email Text Drews Finishes First Season with USA Annie Drews was a standout contributor in her first season with USA Oct. 3,   The end of summer marks the conclusion of USA Volleyball\'s season and the end of perhaps the most exciting chapter in Annie Drews\' volleyball career. Following her MVP season in which she led Caquas Criollas to the Puerto Rican title, she received an invite to train with Team USA and did not disappoint from the moment she arrived in Anaheim, California. Over the course of three tournament appearances and a pair of friendly competitions against Brazil, Drews proved to be one of the top offensive options for the Americans. Beginning with the Pan American Cup in June, Drews led Team USA to its 16th Pan Am Cup in Canete, Peru. The Americans won all seven of their matches defeating Venezuela, Columbia, Puerto Rico, Mexico, Argentina, Peru and the Dominican Republic. The Elkhart, Indiana, native hit .370 with 54 kills on 108 swings to lead the United States in hitting percentage and finish tied for the second most kills on the team. After her dominant effort in the Pan Am Cup, she was left off the Grand Prix roster to begin the tournament, allowing her to go back to Anaheim, California, and train in the Team USA system. However, in need of more offense, Team USA added Drews to the FIVB World Grand Prix Final Six roster and she delivered. Despite USA falling in both of its matches in the final six, Drews led the Americans with 25 kills on 65 attempts in six sets of action. Of USA\'s top three point scorers in the finals, Drews was the only player to come off the bench. She appeared in six of a possible nine sets and registered the second most points on the team with 26 to her credit. Following her two tournaments abroad, she finally sported the red, white and blue in her home country as Team USA hosted Brazil in the USA Volleyball Cup. In front of family, friends and Team USA fanatics, Drews posted two of her best efforts in a USA uniform. In back-to-back contests, the right side hitter torched Brazil for 36 points in just six sets of action. USA defeated Brazil in its first match in three sets and chose to play a bonus set, allowing Drews to rack up 21 points with 14 kills, three blocks and an ace coming in the official three sets. The lefty came off the bench in the second match to lead the United States with 12 kills on 21 attempts with just three errors along with three blocks and an ace in just two sets of action. Drews finished her rookie season with USA in the FIVB World Grand Champions Cup in which she helped the Americans to a bronze medal with wins over Korea, Russia and the tournament\'s host, Japan. She finished with the second most points on USA\'s roster, eighth most points in the tournament and just one point shy of her teammate Jordan Larson who took home the Best Spiker Award as part of the tournament\'s Dream Team. Drews posted 69 points with 58 kills, nine blocks and two aces over the course of five matches. Altogether, Purdue\'s all-american alumna appeared in 55 sets for the United States and terminated 164 of her 381 attempts with 57 errors giving her a .281 hitting percentage and a 2.98 kills per set average. She complemented her scoring efforts with 23 blocks and six aces as well. While enjoying her success with Team USA, Drews signed with SASB Volleyball Legano in Italy\'s Serie A2 to continue her professional volleyball career and prepare for her next season with Team USA.',
  main_image_url: 'http://grfx.cstv.com/photos/schools/pur/sports/w-volley/auto_social/12881623.jpeg',
  country: 'US',
  sentiment_score: 0.246647,
  concepts: [ ],
  title: 'Drews Finishes First Season with USA' 
}
*/


const data = require('../watson/top_10_filtered');

const MAX_CONCEPTS_PER_CONTINENT = 5;

const mapCountryToContinent = {
  'AR' : 'SA',
  'BG' : 'EU',
  'CA' : 'NA',
  'CH' : 'EU',
  'DE' : 'EU',
  'FR' : 'EU',
  'GB' : 'EU',
  'HK' : 'APAC',
  'IN' : 'APAC',
  'KS' : 'APAC',
  'NG' : 'AF',
  'NL' : 'EU',
  'NZ' : 'AU',
  'PE' : 'SA',
  'PK' : 'APAC',
  'US' : 'NA',
  'ZW' : 'AF',
}

var parseArticles = function(){
  let parsedArticles = [];

  let top10ConceptsResults = data.aggregations[0].aggregations[0].results;

  top10ConceptsResults.forEach(function(conceptResult) {
    let articles = conceptResult.aggregations[0].hits.hits;   
      articles.forEach(function(article) {
        let hasArticle = false;

        for(let i = 0; i < parsedArticles.length; i++) {
          if(article.title === parsedArticles[i].title) {
            hasArticle = true;
          }
        }

        if(!hasArticle) {
          parsedArticles.push({
            'id' : article.id,
            'score' : article.score,
            'crawl_date' : article.crawl_date,
            'url' : article.url,
            'host' : article.host,
            'text' : article.text,
            'main_image_url' : article.main_image_url,
            'country' : article.country,
            'sentiment_score' : article.enriched_text.sentiment.document.score,
            'concepts' : article.enriched_text.concepts,
            'title' : article.title,
          });
        }
      })
  });

  return parsedArticles;
}


var getArticlesForRequestedConcept = function(requestedConcept) {
  let parsedArticles = parseArticles();
  let relatedArticles = [];

  parsedArticles.forEach(function(parsedArticle) {

    let articleConcepts = parsedArticle.concepts;

    articleConcepts.forEach(function(articleConcept) {

      if(articleConcept.text === requestedConcept) {
        relatedArticles.push(parsedArticle);
      }

    })
  });

  return relatedArticles.sort(function(firstArticle, secondArticle) {
    let firstArticleConcepts = firstArticle.concepts;
    let secondArticleConcepts = secondArticle.concepts;

    let firstArticleRelevancy;
    let secondArticleRelevancy;

    for(let i = 0; i < firstArticleConcepts.length; i++) {
      if(firstArticleConcepts[i].text === requestedConcept) {
        firstArticleRelevancy = firstArticleConcepts[i].relevance;
      }
    }

    for(let i = 0; i < secondArticleConcepts.length; i++) {
      if(secondArticleConcepts[i].text === requestedConcept) {
        secondArticleRelevancy = secondArticleConcepts[i].relevance;
      }
    }

    return secondArticleRelevancy - firstArticleRelevancy;
  });
}

var getConceptsByContinent = function () {
  let mapConcepts = {
    'NA' : {},
    'SA' : {},
    'EU' : {},
    'AF' : {},
    'APAC' : {},
    'AU' : {},
  };

  let parsedArticles = parseArticles();

  parsedArticles.forEach(function(article) {
    let currentContinent = mapCountryToContinent[article.country];

    article.concepts.forEach(function(articleConcept) {
      if(mapConcepts[currentContinent].hasOwnProperty(articleConcept.text)) {
        mapConcepts[currentContinent][articleConcept.text]++;
      } else {
        mapConcepts[currentContinent][articleConcept.text] = 1;
      }
    });

  });

  for(continent in mapConcepts) {
    let unsorted = [];

    for(concept in mapConcepts[continent]) {
      unsorted.push([concept, mapConcepts[continent][concept]]);
    }

    mapConcepts[continent] = unsorted.sort((a, b) => b[1] - a[1])
                                     .slice(0, MAX_CONCEPTS_PER_CONTINENT);
  }

  return mapConcepts;
}

console.log(getConceptsByContinent());

module.exports = {
  getArticlesForRequestedConcept: getArticlesForRequestedConcept,
  getConceptsByContinent: getConceptsByContinent,
}