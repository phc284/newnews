const data = require('./example_data_october2017.js');

const continents = {
  'US' : 'NA',
  'NZ' : 'AU',
  'AR' : 'SA',
  'NL' : 'EU',
  'FR' : 'EU',
  'CH' : 'EU',
  'CA' : 'NA',
  'BG' : 'EU',
  'PE' : 'SA',
  'ZE' : 'AF',
}

let results = data.results;
let mapData = {
  'NA' : [],
  'SA' : [],
  'EU' : [],
  'AF' : [],
  'APAC' : [],
  'AU' : [],
};

for(let i = 0; i < results.length; i++) {
  
}


// let countries = [];
// let concepts = {};

// for(let i = 0; i < results.length; i++) {
//   if(results[i].country && countries.indexOf(results[i].country) === -1) {
//     countries.push(results[i].country);
//   }

//   let myConcepts = results[i].enriched_text.concepts;
//   for(let j = 0; j < myConcepts.length; j++) {
//     if(concepts.hasOwnProperty(myConcepts[j].text)) {
//       concepts[myConcepts[j].text]++;
//     } else {
//       concepts[myConcepts[j].text] = 1;
//     }
//   }
// }

// let finalConcepts = [];

// for(key in concepts) {
//   if(concepts[key] > 1) {
//     finalConcepts.push([key, concepts[key]]);
//   }
// }

// console.log(finalConcepts);
// console.log(concepts);
// console.log(countries);