import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import * as mapConfig from '../lib/mapConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectWord } from '../actions'

const axios = require('axios');

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
  }

  render () {

    //so listeners can see scope
    var scope = this;
    return (
      <AmCharts.React
        style={{
          'width' : '90%',
          'height' : '500px',
          'backgroundAlpha' : 1,
          'backgroundColor' : '#eeeeee',
          'margin' : 'auto'
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






/*'images' : [
              {
                'latitude' : mapConfig.geoCenters.NA.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#TRUMP',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.north.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#TEMER',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.north.latitude * 1.4,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#DRAGHI',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.north.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#OshiAgabi',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.north.latitude * 1.25,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#PUTIN',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.north.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.major.bubble,
                'scale' : mapConfig.scale.major,
                'label' : '#OZ',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.major.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.north.latitude * 1.25,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.north.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.south.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.south.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.east.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.east.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              }, {
                'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets.west.latitude,
                'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets.west.longitude,
                'type' : 'circle',
                'color' : mapConfig.bubbleColor.minor.bubble,
                'scale' : mapConfig.scale.minor,
                'label' : 'label',
                'labelPosition' : 'middle',
                'labelColor' : mapConfig.bubbleColor.minor.label,
              },
            ],*/
