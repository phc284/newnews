import React from 'react';
import AppBar from 'material-ui/AppBar';
import { getHeadlines } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'

const styles = {
  title: {
    background: 'none',
    height: 20,
    margin: 'auto',
    marginBottom: '8px',
    width: '100%',
    paddingLeft: '-5px',
    paddingRight: '0px'
  },
  span: {
    height: 50,
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
        this.generateHeadlines(response.data)
      })
      .catch((error) => console.log('Map.jsx: ', error));
  }

  //create array of headlines to add to the state
  generateHeadlines(headlines) {
    let result = []
    headlines.headlines.forEach((headline) => {
      var tag = headline.title + '     |     '
      result.push(tag)
    })
    //randomize the headlines
    result.sort(() => Math.random() - 0.5)
    this.setState({
      headlines: result.slice(0,50)
    })
  }



  render() {
    //make string of headlines to display
    var headlines = this.state.headlines.join('')
    return (
      <AppBar
      style={styles.title}
      showMenuIconButton={false}
      title={<p className="microsoft marquee"><span style={styles.span}>{headlines}</span></p>}
      />
    )
  }
}

export default Marquee;
