import React from 'react';
import AppBar from 'material-ui/AppBar';
import { getHeadlines } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'

const styles = {
  title: {
    background: '#8493a8',
    height: 30,
    margin: 'auto',
    marginBottom: '15px',
    width: '100%'
  }
};


class Marquee extends React.Component {

  constructor () {
    super();
    this.state = {
      headlines: []
    }
  }

  componentWillMount () {
    axios.get('/headlines')
      .then((response) => {
        this.generateHeadlines(response.data.headlines)
      })
      .catch((error) => console.log('Map.jsx: ', error));
  }

  generateHeadlines(headlines) {
    let result = []
    headlines.forEach((headline) => {
      var tag = headline.title + '     |     '
      result.push(tag)
    })
    result.sort(() => Math.random() - 0.5)
    this.setState({
      headlines: result
    })
  }



  render() {
    console.log(this.state.headlines)
    return (
      <AppBar
      style={styles.title}
      showMenuIconButton={false}
      title={<p className="microsoft marquee"><span>{this.state.headlines.map((ele) => { return ele})}</span></p>}
      />
    )
  }
}

export default Marquee;
