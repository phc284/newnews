const blacklist = [
  'World Wide Web',
  'Need',
  'Want',
  'Experience',
  'Website',
  2016,
  2017,
  'English-language films',
  'Web browser'
];

const getConcepts = (array) => {
  let concepts = {};
  array.forEach((article) => {
    article.concepts.forEach((concept) => {
      if (concepts[concept.text]) {
        concepts[concept.text]++;
      } else {
        concepts[concept.text] = 1;
      }
    });
  });
  return concepts;
};

const getConceptCount = (obj) => {
  let concepts = [];
  for (let concept in obj) {
    if (obj[concept] >= 0) {
      concepts.push([concept, obj[concept]]);
    }
  }
  return concepts;
};

const getNumOfUniqueConcepts = (obj) => {
  let count = 0;
  for (let concept in obj) {
    if (obj[concept] >= 0) {
      count++;
    }
  }
  return count;
};

const getKeywords = array => {
  let keywords = [];
  array.forEach(article => {
    if (!keywords.includes(article.key)) {
      keywords.push(article.key);
    }
  });
  return keywords;
};

const getCountries = array => {
  let countries = {};
  array.forEach(article => {
    if (!countries[article.country]) {
      countries[article.country] = 1;
    } else {
      countries[article.country]++;
    }
  });
  return countries;
};

const getCommonConcepts = (obj1, obj2) => {
  let common = [];
  for (let concept in obj1) {
    if (obj2[concept]) {
      common.push(concept);
    }
  }
  return common;
};