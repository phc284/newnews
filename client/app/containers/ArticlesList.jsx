import React from 'react';
import Article from '../components/Article.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getArticles } from '../actions/mapActions.js'

//add redux functionality to access array of data objects in state

const styles = {
  article: {
    marginBottom: '10px'
  }
}

class Articles extends React.Component {

  componentWillReceiveProps (nextProps) {
    if(nextProps.activeWord) {
      nextProps.getArticles();
    }
  }

  render () {
    console.log(this.props)
    var articles = this.props.articles;
    return (
      <div >
        {articles && articles.map((article, index) => {
          return <div style={styles.article}><Article article={article} key={index}/></div>
        })}
      </div>
    );
  }
}

function mapStatesToProps (state) {
  return {
    articles: state.articles,
    activeWord: state.activeWord
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getArticles: getArticles}, dispatch)
}

export default connect(mapStatesToProps, mapDispatchToProps)(Articles);
