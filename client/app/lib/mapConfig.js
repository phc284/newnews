const geoCenters = {
  'NA' : {
    'latitude' : 48.3548,
    'longitude' : -99.9989,
  },
  'SA' : {
    'latitude' : -15.6006,
    'longitude' : -56.1004
  },
  'EU' : {
    'latitude' : 54.5423,
    'longitude' : 25.198
  },
  'AF' : {
    'latitude' : 1.261,
    'longitude' : 25
  },
  'APAC' : {
    'latitude' : 50,
    'longitude' : 100
  },
  'AU' : {
    'latitude' : -23.02,
    'longitude' : 140.10
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
    'label' : 'blue'
  }
}

const zoomSettings = {
  'zoomLevel' : 1.4,
  'zoomLatitude' : 25,
  'zoomLongitude' : 40,
}

const dummyData = {
  'NA' : [
    ['United States', 5],
    ['National Football League', 3],
    ['San Francisco 49ers', 3],
    ['Stock market', 3],
    ['Financial services', 3]
  ],
  'SA' : [
    ['NCR Corporation', 4],
    ['Microsoft', 3],
    ['Retailing', 2],
    ['Hairstyle', 1],
    ['Graphic Design', 1],
  ],
  'EU' : [
    ['Earthquake', 5],
    ['Kathmandu District', 3],
    ['Bubonic plague', 1],
    ['Nepali Language', 1],
    ['Jennifer Lopez', 1],
  ],
  'AF' : [
    ['2010 FIFA World Cup', 3],
    ['Durban', 3],
    ['Moses Mabhida Stadium', 2],
    ['Soweto', 1],
    ['Robert Mugabe', 1],
  ],
  'APAC' : [
    ['APAC1', 5],
    ['APAC2', 4],
    ['APAC3', 3],
    ['APAC4', 2],
    ['APAC5', 1],
  ],
  'AU' : [
    ['New Zealand Wine', 3],
    ['Chardonnay', 3],
    ['Australian and New Zealand Wine Industry Journal', 2],
    ['Wairau River', 2],
    ['South Island', 1],
  ],
}

module.exports = {
  geoCenters: geoCenters,
  coordOffsets: coordOffsets,
  scale: scale,
  bubbleColor: bubbleColor,
  zoomSettings: zoomSettings,
  dummyData: dummyData,
}