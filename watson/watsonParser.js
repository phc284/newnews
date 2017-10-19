const data = require('./top_10_filtered');

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
}