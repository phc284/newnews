import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';

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
            'map' : 'worldLow',
            'areas' : [
              { 
                'id' : 'CA',
                'groupId' : 'North America',
                'color' : '#67b7dc',
              }, { 
                'id' : 'US',
                'groupId' : 'North America',
                'color' : '#67b7dc',
              }, { 
                'id' : 'MX',
                'groupId' : 'North America',
                'color' : '#67b7dc',
              }, { 
                'id' : 'AG',
                'groupId' : 'North America',
                'color' : '#67b7dc',
              },
            ]
            // 'getAreasFromMap' : true
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