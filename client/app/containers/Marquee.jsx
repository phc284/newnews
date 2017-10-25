import React from 'react';
import AppBar from 'material-ui/AppBar';
import { getHeadlines } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios'

const styles = {
  title: {
    background: '#373737',
    height: 30,
    margin: 'auto',
    marginBottom: '8px',
    width: '100%',
    paddingLeft: '-5px',
    paddingRight: '0px'
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
    //randomize the headlines
    result.sort(() => Math.random() - 0.5)
    this.setState({
      headlines: result.slice(0,50)
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
