import React from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import axios from 'axios';
import countries from '../../countries.js';

const getCountryCounts = hits => {
  let dataProvider = {};
  let dpArray = []
  hits.forEach((article) => {
    let countryName = countries[article.country];
    if (dataProvider[countryName]) {
      dataProvider[countryName]++;
    } else {
      dataProvider[countryName] = 1;
    }
  });
  for (let country in dataProvider) {
    dpArray.push({
      country: country,
      hits: dataProvider[country]
    })
  }
  return dpArray.sort((a, b) => {
    return b.hits - a.hits;
  });
};

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    }
  }

  componentDidMount(props) {
    axios.get('/articles/concept/' + this.props.tag, {params: {query: this.props.tag}})
    .then(response => {
      this.setState({hits: response.data});
    })
  }

  render() {
    return this.state.hits.length 
      ? (
      <AmCharts.React
        style={{
          width: "100%",
          height: "450px",
        }}
        options={{
          "type": "pie",
          "theme": "light",
          "percentPrecision": 0,
          colors: [
            '#E0A257',
            '#DEAC53',
            '#DDB94F',
            '#DBC54A',
            '#BBC056',
            '#97BB64',
            '#72B572',
            '#72B783',
            '#71BA96',
            '#71BCAA',
            '#69A9AA',
            '#5F93AA',
            '#557DAA',
            '#6981AD',
            '#8086B1',
            '#978BB5',
            '#8086B1',
            '#6981AD',
            '#557DAA',
            '#5F93AA',
            '#69A9AA',
            '#71BCAA',
            '#71BA96',
            '#72B783',
            '#72B572',
            '#97BB64',
            '#BBC056',
            '#DBC54A',
            '#DDB94F',
            '#DEAC53'
          ],
          //gradientRatio: [0, 0.2, 0.4, 0.6, 0.8, 1],
          "titles": [ {
            "text": this.props.tag,
            "size": 20
          } ],
          dataProvider: getCountryCounts(this.state.hits),
          "valueField": "hits",
          "titleField": "country",
          "startEffect": "elastic",
          "startDuration": 3,
          "labelRadius": 15,
          "innerRadius": "50%",
          "depth3D": 10,
          "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span>",
          "angle": 15,
          "export": {
            "enabled": true
          }
        }} 
      />
    )
    : <span>Loading....</span>
  }
}

export default Chart;