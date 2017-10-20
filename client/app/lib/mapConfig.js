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
    'longitude' : 15.198
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
  'zoomLevel' : 1.2,
  'zoomLatitude' : 25,
  'zoomLongitude' : 25,
}

const dummyData = {
  'NA' : [
    [ 'United States', 34 ],
    [ 'President of the United States', 24 ],
    [ 'Democratic Party', 20 ],
    [ 'English-language films', 17 ],
    [ 'Donald Trump', 15 ],
  ],
  'SA' : [
    ['NCR Corporation', 4],
    ['Microsoft', 3],
    ['Retailing', 2],
    ['Hairstyle', 1],
    ['Graphic Design', 1],
  ],
  'EU' : [
    [ 'United Kingdom', 7 ],
    [ 'Stock', 7 ],
    [ 'Stock market', 7 ],
    [ 'Stock exchange', 5 ],
    [ 'Switzerland', 3 ]
  ],
  'AF' : [
    [ 'Iraq War', 1 ],
    [ 'Enriched uranium', 1 ],
    [ 'War', 1 ],
    [ 'President of the United States', 1 ],
    [ 'Nuclear program of Iran', 1 ],
  ],
  'APAC' : [
    [ 'United States', 4 ],
    [ 'George W. Bush', 4 ],
    [ 'Barack Obama', 3 ],
    [ 'Democratic Party', 3 ],
    [ 'President of the United States', 3 ],
  ],
  'AU' : [
    ['New Zealand Wine', 3],
    ['Chardonnay', 3],
    ['Australian and New Zealand Wine Industry Journal', 2],
    ['Wairau River', 2],
    ['South Island', 1],
  ],
}

const defaultData = {
  'NA' : [
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
  ],
  'SA' : [
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
  ],
  'EU' : [
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
  ],
  'AF' : [
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
  ],
  'APAC' : [
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
  ],
  'AU' : [
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
    [ 'Default', 1 ],
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
