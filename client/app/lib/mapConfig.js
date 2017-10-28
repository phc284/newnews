const axios = require('axios');

const geoCenters = {
  'nAmerica' : {
    'latitude' : 38,
    'longitude' : -97,
  },
  'sAmerica' : {
    'latitude' : -10,
    'longitude' : -55,
  },
  'Europe' : {
    'latitude' : 52,
    'longitude' : 20,
  },
  'Africa' : {
    'latitude' : 15,
    'longitude' : 19,
  },
  'Asia' : {
    'latitude' : 46,
    'longitude' : 105,
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

module.exports = {
  geoCenters: geoCenters,
  coordOffsets: coordOffsets,
  scale: scale,
  bubbleColor: bubbleColor,
  zoomSettings: zoomSettings,
}
