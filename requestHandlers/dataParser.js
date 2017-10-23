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

var filterArticlesByKeyword = function(articles, requestedConcept) {
  let filteredArticles = [];

  articles.forEach(function(article) {
    let alreadyPushed = false;
    let concepts = article.concepts;

    for(let i = 0; i < filteredArticles.length; i++) {
      if(article.title === filteredArticles[i].title) {
        alreadyPushed = true;
      }
    }

    if(!alreadyPushed && concepts.hasOwnProperty(requestedConcept)) {
      filteredArticles.push(article);
    }

  });

  return filteredArticles;
}

var flattenConcepts = function(conceptsRay) {
  let flattenedObj = {
    'NA' : {},
    'SA' : {},
    'EU' : {},
    'AF' : {},
    'APAC' : {},
    'AU' : {},
  };

  // console.log('dataParser.js, conceptsRay: ', conceptsRay);

  conceptsRay.forEach(function(conceptItem) {
    let continent = mapCountryToContinent[conceptItem.country];
    let conceptList = conceptItem.concepts;

    // console.log('dataParser.js, continent: ', continent);
    if(continent) {
      for(let conceptKey in conceptList) {
        if(flattenedObj[continent][conceptKey]) {
          flattenedObj[continent][conceptKey]++;
        } else {
          flattenedObj[continent][conceptKey] = 1;
        }
      }
    }
  });

  for(let continent in flattenedObj) {
    flattenedObj[continent] = convertObjToArray(flattenedObj[continent]);
  }

  return flattenedObj;
}

var convertObjToArray = function(conceptsObj) {
  let unsortedRay = [];

  for(let concept in conceptsObj) {
    unsortedRay.push([concept, conceptsObj[concept]]);
  }

  return unsortedRay.sort(function(firstConcept, secondConcept) {
    return secondConcept[1] - firstConcept[1];
  })
    .slice(0, MAX_CONCEPTS_PER_CONTINENT);
}

module.exports = {
  filterArticlesByKeyword: filterArticlesByKeyword,
  flattenConcepts: flattenConcepts,
}
