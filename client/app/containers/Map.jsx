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
        console.log(response)
        let conceptData = response.data.concepts;
        this.generateImages(conceptData);
      })
      .catch((error) => console.log('Map.jsx: ', error));
  }

  //map will rerender and zoom back out if the state changes
  shouldComponentUpdate(nextProps) {
    //if the word changes, return false so the map doesn't rerender
    const different = nextProps.activeWord === this.props.activeWord
    return different;
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
          'labelFontSize' : concept[1] > 5 ? 22 : 11 + concept[1] * 1.5,
          'label' : concept[0],
          'labelPosition' : 'middle',
          'labelColor' : mapConfig.bubbleColor.major.label,
          'selectable' : true,
          'selectedLabelColor' : '#db2e2e'
        })
      })
    }

    //dummy data to test hide/show image group
    images.push({
      'groupId': 'hello',
      'latitude' : 0,
      'longitude' : 25,
      // 'type' : 'circle',
      // 'color' : mapConfig.bubbleColor.major.bubble,
      // 'scale' : mapConfig.scale.major,
      'labelFontSize' : 28,
      'label' : "HELLO",
      'labelPosition' : 'middle',
      'labelColor' : '#238796',
      'selectable' : true,
      'selectedLabelColor' : '#db2e2e'
    })

    this.setState({images: images});
  }


  render () {
    //so listeners can see scope
    var scope = this;
    return (
      <AmCharts.React
        style={{
          'width' : '100%',
          'height' : '75%',
          'backgroundAlpha' : 1,
          'backgroundColor' : '#c6c6c6',
          'margin' : 'auto',
          'borderAlpha': 1,
          'borderColor': '#000000',
          'borderRadius': '20px'
        }}
        options ={{
          'type': 'map',
          'theme' : 'chalk',
          'addClassNames': true,
          // 'centerMap': false,
          'dataProvider' : {
            'map' : 'continentsLow',
            // 'getAreasFromMap' : true,
            'zoomLevel' : mapConfig.zoomSettings.zoomLevel,
            'zoomLatitude' : mapConfig.zoomSettings.zoomLatitude,
            'zoomLongitude' : mapConfig.zoomSettings.zoomLongitude,
            'images' : this.state.images,
            "areas": [
              {
                "id": "africa",
                "color": "#72b572",
              }, {
                "id": "asia",
                "color": "#dbc54a",
              }, {
                "id": "australia",
                "color": "#978bb5",
              }, {
                "id": "europe",
                "color": "#557daa",
              }, {
                "id": "north_america",
                "color": "#71bcaa",
              }, {
                "id": "south_america",
                "color": "#e0a257"
              }
            ]
          },
          'areasSettings': {
            'balloonText' : '',
            'autoZoom' : false,
            // 'selectedColor' : '#CC0000',
            'rollOverColor': undefined,
            'rollOverOutlineColor': undefined,
            'outlineThickness': 1,
            'outlineColor': '#ffffff'
          },
          'zoomControl' : {
            'zoomControlEnabled' : false,
            'buttonFillColor': '#ffffff'
          },
          'listeners': [
            {
              'event': 'clickMapObject',
              'method': function (event) {
                //add selected object label into store to grab articles
                scope.props.selectWord(event.mapObject.label)
                // scope.sayHello(event.mapObject.label)
              }
            },
            {
              'event': 'zoomCompleted',
              'method': function(event) {
                //if zoom level is over 3, show this group of images on map
                if(event.chart.zLevelTemp >= 1.7) {
                  event.chart.showGroup('hello')
                }
              }
            },
            {
              'event': 'zoomCompleted',
              'method': function(event) {
                //hide group of images if zoom level is less than 3
                if(event.chart.zLevelTemp <= 1.7) {
                  event.chart.hideGroup('hello')
                }
              }
            },
            {
              'event': 'rendered',
              'method': function(event) {
                //when map is rendered, hide this group of images
                event.chart.hideGroup('hello')
              }
            },
            {
              'event': 'homeButtonClicked',
              'method': function(event) {
                //when home button is clicked (zoomed back out), hide this group of images
                event.chart.hideGroup('hello')
              }
            },
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
