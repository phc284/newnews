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
  'north' : {
    'latitude' : 11.5,
    'longitude' : 0
  },
  'south' : {
    'latitude' : -15,
    'longitude' : 0
  },
  'east' : {
    'latitude' : 0,
    'longitude' : 20
  },
  'west' : {
    'latitude' : 0,
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
  'zoomLevel' : 1.5,
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
    ['NCR Corporation', 1],
    ['Microsoft', 1],
    ['Retailing', 1],
    ['Hairstyle', 1],
    ['Graphic Design', 1],
  ],
  'EU' : [
    ['Earthquake', 1],
    ['Kathmandu District', 1],
    ['Bubonic plague', 1],
    ['Nepal', 1],
    ['Jennifer Lopez', 1],
  ],
  'AF' : [
    ['2010 FIFA World Cup', 1],
    ['Durban', 1],
    ['Moses Mabhida Stadium', 1],
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
    ['New Zealand Wine', 1],
    ['Chardonnay', 1],
    ['Australian and New Zealand Wine Industry Journal', 1],
    ['Wairau River', 1],
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