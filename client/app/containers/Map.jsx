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
    'bubble' : 'green',
    'label' : 'blue'
  }
}

class Map extends React.Component {
  render () {
    return (
      <AmCharts.React
        style={{
          'width': '1000px',
          'height': '500px',
          'backgroundAlpha' : 1,
          'backgroundColor' : '#eeeeee'
        }}
        options ={{
          'type': 'map',
          'theme' : 'chalk',
          'dataProvider' : {
            'map' : 'continentsLow',
            'getAreasFromMap' : true,
            'images' : [
              {
                'latitude' : geoCenters.NA.latitude,
                'longitude' : geoCenters.NA.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major.bubble,
                'scale' : scale.major,
                'label' : '#TRUMP',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.major.label,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.NA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.NA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.SA.latitude,
                'longitude' : geoCenters.SA.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major.bubble,
                'scale' : scale.major,
                'label' : '#TEMER',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.major.label,
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.SA.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.SA.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.EU.latitude,
                'longitude' : geoCenters.EU.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major.bubble,
                'scale' : scale.major,
                'label' : '#DRAGHI',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.major.label,
              }, {
                'latitude' : geoCenters.EU.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.EU.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.EU.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.EU.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.EU.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.EU.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.EU.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.EU.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AF.latitude,
                'longitude' : geoCenters.AF.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major.bubble,
                'scale' : scale.major,
                'label' : '#OshiAgabi',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.major.label,
              }, {
                'latitude' : geoCenters.AF.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.AF.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AF.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.AF.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AF.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.AF.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AF.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.AF.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.APAC.latitude,
                'longitude' : geoCenters.APAC.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major.bubble,
                'scale' : scale.major,
                'label' : '#PUTIN',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.major.label,
              }, {
                'latitude' : geoCenters.APAC.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.APAC.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.APAC.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.APAC.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.APAC.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.APAC.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.APAC.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.APAC.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AU.latitude,
                'longitude' : geoCenters.AU.longitude,
                'type' : 'circle',
                'color' : bubbleColor.major.bubble,
                'scale' : scale.major,
                'label' : '#OZ',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.major.label,
              }, {
                'latitude' : geoCenters.AU.latitude + coordOffsets.north.latitude,
                'longitude' : geoCenters.AU.longitude + coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AU.latitude + coordOffsets.south.latitude,
                'longitude' : geoCenters.AU.longitude + coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AU.latitude + coordOffsets.east.latitude,
                'longitude' : geoCenters.AU.longitude + coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
              }, {
                'latitude' : geoCenters.AU.latitude + coordOffsets.west.latitude,
                'longitude' : geoCenters.AU.longitude + coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : bubbleColor.minor.bubble,
                'scale' : scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : bubbleColor.minor.label,
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