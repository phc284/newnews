import React from 'react';
import Article from '../components/Article.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

//add redux functionality to access array of data objects in state

class Articles extends React.Component {
  render () {
    console.log(this.props)
    return (
      <Article />
    );
  }
}

function mapStatesToProps (state) {
  return {
    articles: state.articles
  }
}

export default connect(mapStatesToProps)(Articles);
