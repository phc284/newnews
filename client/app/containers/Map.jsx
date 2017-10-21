import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import * as mapConfig from '../lib/mapConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectWord } from '../actions'

const axios = require('axios');

// TODO: Render scale seems to be off between North America and Europe

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    }
  }
  componentWillMount() {
    axios.get('/concepts')
      .then((response) => {
        let conceptData = response.data.concepts;
        this.generateImages(conceptData);
      })
      .catch((error) => console.log('Map.jsx: ', error));
  }

  generateImages(conceptData) {
    let images = [];

    for(let continent in conceptData) {
      conceptData[continent].forEach(function(concept, index) {
        images.push({
          'latitude' : mapConfig.geoCenters[continent].latitude + mapConfig.coordOffsets[index].latitude,
          'longitude' : mapConfig.geoCenters[continent].longitude + mapConfig.coordOffsets[index].longitude,
          // 'type' : 'circle',
          // 'color' : mapConfig.bubbleColor.major.bubble,
          // 'scale' : mapConfig.scale.major,
          'labelFontSize' : concept[1] <= 5 ? concept[1]*8 : 17.5,
          'label' : concept[0],
          'labelPosition' : 'middle',
          'labelColor' : mapConfig.bubbleColor.major.label,
          'selectable' : true,
          'selectedLabelColor' : '#ed1515',
        })
      })
    }

    this.setState({images: images});

    // { NA:
    //  [ [ 'United States', 21 ],
    //    [ 'English-language films', 14 ],
    //    [ 'President of the United States', 12 ],
    //    [ 'Democratic Party', 10 ],
    //    [ 'Donald Trump', 10 ] ],
    // SA: [],
    // EU:
    //  [ [ 'United Kingdom', 5 ],
    //    [ 'Stock', 3 ],
    //    [ 'Race', 3 ],
    //    [ 'United States', 3 ],
    //    [ 'Stock market', 3 ] ],
    // AF:
    //  [ [ 'Iraq War', 1 ],
    //    [ 'Enriched uranium', 1 ],
    //    [ 'War', 1 ],
    //    [ 'President of the United States', 1 ],
    //    [ 'Nuclear program of Iran', 1 ] ],
    // APAC:
    //  [ [ 'United States', 3 ],
    //    [ 'George W. Bush', 3 ],
    //    [ 'United States Department of Defense', 2 ],
    //    [ 'Joint Chiefs of Staff', 2 ],
    //    [ 'Barack Obama', 2 ] ],
    // AU: [] }
  }

  render () {

    //so listeners can see scope
    var scope = this;
    return (
      <AmCharts.React
        style={{
          'width' : '100%',
          'height' : '90%',
          'backgroundAlpha' : 1,
          'backgroundColor' : '#eeeeee'
        }}
        options ={{
          'type': 'map',
          'theme' : 'chalk',
          'addClassNames': true,
          'centerMap': false,
          'dataProvider' : {
            'map' : 'continentsLow',
            // 'getAreasFromMap' : true,
            'zoomLevel' : mapConfig.zoomSettings.zoomLevel,
            'zoomLatitude' : mapConfig.zoomSettings.zoomLatitude,
            'zoomLongitude' : mapConfig.zoomSettings.zoomLongitude,
            'images' : this.state.images,
          },
          'areasSettings': {
            'balloonText' : '',
            'autoZoom' : false,
            // 'selectedColor' : '#CC0000',
          },
          'zoomControl' : {
            'zoomControlEnabled' : false,
          },
          'listeners': [
            {
              'event': 'clickMapObject',
              'method': function(event) {
                console.log('label', event.mapObject);
                scope.props.selectWord(event.mapObject.label)
              }
            }
          ]
        }}
      />
    );
  }
}


function mapStateToProps (state) {
  return {
    activeWord: state.activeWord
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectWord: selectWord}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
