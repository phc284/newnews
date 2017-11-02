const axios = require('axios');

const geoCenters = {
  'nAmerica' : {
    // 'latitude' : 38,
    'latitude' : 45,
    'longitude' : -97,
  },
  'sAmerica' : {
    // 'latitude' : -10,
    'latitude' : -15,
    // 'longitude' : -55,
    'longitude': -58,
  },
  'Europe' : {
    // 'latitude' : 52,
    'latitude' : 60,
    'longitude' : 20,
  },
  'Africa' : {
    // 'latitude' : 15,
    'latitude' : 5,
    'longitude' : 19,
  },
  'Asia' : {
    // 'latitude' : 46,
    'latitude' : 50,
    // 'longitude' : 105,
    'longitude' : 100,
  },
  'Oceania' : {
    'latitude' : -27,
    'longitude' : 133
  }
}

const coordOffsets = {
  '0' : {
    'latitude' : 0,
    'longitude' : 0
  },
  '1' : {
    'latitude' : 11.5,
    'longitude' : 0
  },
  '2' : {
    'latitude' : -15,
    'longitude' : 0
  },
  '3' : {
    'latitude' : -5,
    'longitude' : 20
  },
  '4' : {
    'latitude' : 5,
    'longitude' : -20
  }
}

const scale = {
  'major' : 5,
  'minor' : 2.5
}

const bubbleColor = {
  'major' : {
    'bubble' : '#00cc62',
    'label' : '#000000'
  },
  'minor' : {
    'bubble' : 'yellow',
    'label' : '#db2e2e'
  }
}

const zoomSettings = {
  'zoomLevel' : 1.25,
  'zoomLatitude' : 35,
  'zoomLongitude' : 5,
}

const dummy = [
  {
    key: 'United States',
    matching_results: '50000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'President of the United States',
    matching_results: '40000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Stock Market',
    matching_results: '30000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Stock',
    matching_results: '20000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'English-language films',
    matching_results: '10000',
    continent: 'nAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United Kingdom',
    matching_results: '50000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Manchester United F.C.',
    matching_results: '40000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'English-language films',
    matching_results: '30000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United States',
    matching_results: '20000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United States',
    matching_results: '10000',
    continent: 'Europe',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Graphic design',
    matching_results: '50000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Marketing',
    matching_results: '40000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Cyrillic alphabet',
    matching_results: '30000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'World Wide Web',
    matching_results: '20000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Experience',
    matching_results: '10000',
    continent: 'sAmerica',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'India',
    matching_results: '50000',
    continent: 'Asia',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United States',
    matching_results: '40000',
    continent: 'Asia',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Government',
    matching_results: '30000',
    continent: 'Asia',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Bharatiya Janata Party',
    matching_results: '20000',
    continent: 'Asia',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Gujarat',
    matching_results: '10000',
    continent: 'Asia',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'South Africa',
    matching_results: '50000',
    continent: 'Africa',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Nigeria',
    matching_results: '40000',
    continent: 'Africa',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'President of the United States',
    matching_results: '30000',
    continent: 'Africa',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Africa',
    matching_results: '20000',
    continent: 'Africa',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United States',
    matching_results: '10000',
    continent: 'Africa',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'Australia',
    matching_results: '50000',
    continent: 'Oceania',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'New Zealand',
    matching_results: '40000',
    continent: 'Oceania',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'English-language films',
    matching_results: '30000',
    continent: 'Oceania',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United States',
    matching_results: '20000',
    continent: 'Oceania',
    query_date: '10/31/2017',
    article_ids: [],
  }, {
    key: 'United Kingdom',
    matching_results: '10000',
    continent: 'Oceania',
    query_date: '10/31/2017',
    article_ids: [],
  }
]

module.exports = {
  geoCenters: geoCenters,
  coordOffsets: coordOffsets,
  scale: scale,
  bubbleColor: bubbleColor,
  zoomSettings: zoomSettings,
  dummy: dummy,
}
