import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';

const geoCenters = {
  'NA' : {
    'latitude' : 48.3548,
    'longitude' : -99.9989,
  },
  'ASIA' : {
    'latitude' : 43.6841,
    'longitude' : 87.3315
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

const colors = {
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
                'color' : colors.major,
                'scale' : scale.major,
                'label' : '#TRUMP',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : colors.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : colors.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : colors.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : colors.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude,
                'longitude' : geoCenters.ASIA.longitude,
                'type' : 'circle',
                'color' : colors.major,
                'scale' : scale.major,
                'label' : '#PUTIN',
                'labelPosition' : 'middle',
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : colors.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : colors.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : colors.minor,
                'scale' : scale.minor,
              }, {
                'latitude' : geoCenters.ASIA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.ASIA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : colors.minor,
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