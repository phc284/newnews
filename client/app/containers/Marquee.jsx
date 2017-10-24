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
    //get headlines from the DB
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
    //randomize the headlines order
    result.sort(() => Math.random() - 0.5)
    this.setState({
      headlines: result
    })
  }



  render() {
    var headlines = this.state.headlines.join('')
    return (
      <AppBar
      style={styles.title}
      showMenuIconButton={false}
      title={<p className="microsoft marquee"><span>{headlines}</span></p>}
      />
    )
  }
}

export default Marquee;
