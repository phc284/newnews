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
        console.log('Map.jsx (componentWillMount) response:', response.data.concepts);
        let conceptData = response.data.concepts;
        this.generateImages(conceptData);
      })
      .catch((error) => console.log('Map.jsx: ', error));
  }

  generateImages(conceptData) {
    let images = [];

    // generate NA
    let conceptsNA = conceptData['NA'];
    for(let i = 0; i < conceptsNA.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.NA.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.NA.longitude + mapConfig.coordOffsets[i].longitude,
        // 'type' : 'circle',
        // 'color' : mapConfig.bubbleColor.major.bubble,
        'scale' : mapConfig.scale.major,
        'labelFontSize' : conceptsNA[i][1] <= 5 ? conceptsNA[i][1]*8 : 17.5,
        'label' : conceptsNA[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
        'selectable': true,
        'selectedLabelColor': '#ed1515'
      })
    }

    // generate SA
    let conceptsSA = conceptData['SA'];
    for(let i = 0; i < conceptsSA.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.SA.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.SA.longitude + mapConfig.coordOffsets[i].longitude,
        // 'type' : 'circle',
        // 'color' : mapConfig.bubbleColor.major.bubble,
        'scale' : mapConfig.scale.major,
        'labelFontSize' : conceptsSA[i][1] <= 5 ? conceptsSA[i][1]*8 : 17.5,
        'label' : conceptsSA[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
        'selectable': true,
        'selectedLabelColor': '#ed1515'
      })
    }

    // generate EU
    let conceptsEU = conceptData['EU'];
    for(let i = 0; i < conceptsEU.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.EU.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.EU.longitude + mapConfig.coordOffsets[i].longitude,
        // 'type' : 'circle',
        // 'color' : mapConfig.bubbleColor.major.bubble,
        'scale' : mapConfig.scale.major,
        'labelFontSize' : conceptsEU[i][1] <= 5 ? conceptsEU[i][1]*8 : 17.5,
        'label' : conceptsEU[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
        'selectable': true,
        'selectedLabelColor': '#ed1515'
      })
    }

    // generate AF
    let conceptsAF = conceptData['AF'];
    for(let i = 0; i < conceptsAF.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.AF.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.AF.longitude + mapConfig.coordOffsets[i].longitude,
        // 'type' : 'circle',
        // 'color' : mapConfig.bubbleColor.major.bubble,
        'scale' : mapConfig.scale.major,
        'labelFontSize' : conceptsAF[i][1] <= 5 ? conceptsAF[i][1]*8 : 17.5,
        'label' : conceptsAF[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
        'selectable': true,
        'selectedLabelColor': '#ed1515'
      })
    }

    // generate APAC
    let conceptsAPAC = conceptData['APAC'];
    for(let i = 0; i < conceptsAPAC.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.APAC.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.APAC.longitude + mapConfig.coordOffsets[i].longitude,
        // 'type' : 'circle',
        // 'color' : mapConfig.bubbleColor.major.bubble,
        'scale' : mapConfig.scale.major,
        'labelFontSize' : conceptsAPAC[i][1] <= 5 ? conceptsAPAC[i][1]*8 : 17.5,
        'label' : conceptsAPAC[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
        'selectable': true,
        'selectedLabelColor': '#ed1515'
      })
    }

    // generate AU
    let conceptsAU = conceptData['AU'];
    for(let i = 0; i < conceptsAU.length; i++) {
      images.push({
        'latitude' : mapConfig.geoCenters.AU.latitude + mapConfig.coordOffsets[i].latitude,
        'longitude' : mapConfig.geoCenters.AU.longitude + mapConfig.coordOffsets[i].longitude,
        // 'type' : 'circle',
        // 'color' : mapConfig.bubbleColor.major.bubble,
        'scale' : mapConfig.scale.major,
        'labelFontSize' : conceptsAU[i][1] <= 5 ? conceptsAU[i][1]*8 : 17.5,
        'label' : conceptsAU[i][0],
        'labelPosition' : 'middle',
        'labelColor' : mapConfig.bubbleColor.major.label,
        'selectable': true,
        'selectedColor': '#ed1515'


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
