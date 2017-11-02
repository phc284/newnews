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
    color: 'white'
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
      .catch((error) => console.log('Marquee.jsx: ', error));
  }

  // create array of headlines to add to the state
  generateHeadlines(headlines) {
    let result = []
    headlines.headlines.forEach((headline) => {
      var title = headline.title + "       |       "
      var art = { title: title, url: headline.url}
      result.push(art)
    })
    //randomize the headlines
    result.sort(() => Math.random() - 0.5)
    this.setState({
      headlines: result.slice(0,50)
    })
  }



  render() {
    //make each headline a clickable link
    const makeHeadline = (headlines) => {
      return (
          headlines.map((headline, i) => {
            return <a target="_blank" href={headline.url} key={i}>{headline.title}</a>
          })
        )
    }
    //make string of headlines to display
    return (
      <p className="marquee"><span style={styles.span}>{makeHeadline(this.state.headlines)}</span></p>
    )
  }
}

export default Marquee;
