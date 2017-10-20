const data = require('./top_10_filtered');

const continents = {
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

let mapData = {
  'NA' : {},
  'SA' : {},
  'EU' : {},
  'AF' : {},
  'APAC' : {},
  'AU' : {},
};


let keyTermsArray = data.aggregations[0].aggregations[0].results;

for(let i = 0; i < keyTermsArray.length; i++) {
  let conceptArray = keyTermsArray[i].aggregations[0].hits.hits;
  for(let j = 0; j < conceptArray.length; j++) {
    let currentCountry = conceptArray[j].country;
    let currentContinent = continents[currentCountry];

    // record concepts
    let localConcepts = conceptArray[j].enriched_text.concepts;
    for(let k = 0; k < localConcepts.length; k++) {
      let currentConcept = localConcepts[k].text;
      if(mapData[currentContinent].hasOwnProperty(currentConcept)){
        mapData[currentContinent][currentConcept]++;
      } else {
        mapData[currentContinent][currentConcept] = 1;
      }
    }
  }
}

for(continent in mapData) {
  let sorted = [];

  for(concept in mapData[continent]) {
    sorted.push([concept, mapData[continent][concept]]);
  }
  
  mapData[continent] = sorted.sort((a, b) => b[1] - a[1]);  
}

// console.log('NA: ', mapData.NA);
console.log('SA: ', mapData.SA);
console.log('EU: ', mapData.EU);
console.log('AF: ', mapData.AF);
console.log('APAC: ', mapData.APAC);
console.log('AU: ', mapData.AU);