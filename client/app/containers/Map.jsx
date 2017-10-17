import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';

const geoCenters = {
  'NA' : {
    'latitude' : 48.3548,
    'longitude' : -99.9989,
  },
  'SA' : {
    'latitude' : -15.6006,
    'longitude' : -56.1004
  },
  'EUROPE' : {
    'latitude' : 54.5423,
    'longitude' : 25.198
  },
  'AFRICA' : {
    'latitude' : 1.261,
    'longitude' : 25
  },
  'ASIA' : {
    'latitude' : 50,
    'longitude' : 100
  },
  'AUSTRALIA' : {
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
  'major' : '#00cc62',
  'minor' : 'blue'
}

class Map extends React.Component {
  render () {
    return (
      <AmCharts.React
        style={{
          width: '100%',
          height: '500px'
        }}
        options ={{
          'type': 'map',
          'dataProvider' : {
            'map' : 'continentsLow',
            'getAreasFromMap' : true,
            'images' : [
              {
                'latitude' : geoCenters.NA.latitude,
                'longitude' : geoCenters.NA.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major,
                'scale' : scale.major,
                'label' : '#TRUMP',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.SA.latitude,
                'longitude' : geoCenters.SA.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major,
                'scale' : scale.major,
                'label' : '#TEMER',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.EUROPE.latitude,
                'longitude' : geoCenters.EUROPE.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major,
                'scale' : scale.major,
                'label' : '#DRAGHI',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.EUROPE.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.EUROPE.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.EUROPE.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.EUROPE.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.EUROPE.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.EUROPE.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.EUROPE.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.EUROPE.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AFRICA.latitude,
                'longitude' : geoCenters.AFRICA.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major,
                'scale' : scale.major,
                'label' : '#OshiAgabi',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.AFRICA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.AFRICA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AFRICA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.AFRICA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AFRICA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.AFRICA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AFRICA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.AFRICA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude,
                'longitude' : geoCenters.ASIA.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major,
                'scale' : scale.major,
                'label' : '#PUTIN',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AUSTRALIA.latitude,
                'longitude' : geoCenters.AUSTRALIA.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major,
                'scale' : scale.major,
                'label' : '#OZ',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.AUSTRALIA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.AUSTRALIA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AUSTRALIA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.AUSTRALIA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AUSTRALIA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.AUSTRALIA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.AUSTRALIA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.AUSTRALIA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor,
                'scale' : scale.minor,
              },
            ],
          },
          'areasSettings': {
            'autoZoom' : true,
            'selectedColor' : '#CC0000'
          }
        }} 
      />
    );
  }
}

export default Map;