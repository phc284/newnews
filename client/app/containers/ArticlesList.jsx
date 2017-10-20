import React from 'react';
import Article from '../components/Article.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticles } from '../actions';
import { topten } from '../../../watson/restructured_data.js';

//add redux functionality to access array of data objects in state

const styles = {
  article: {
    marginBottom: '5px'
  }
}

class Articles extends React.Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.activeWord) {
      nextProps.getArticles(nextProps.activeWord);
    } else {
      nextProps.getArticles(topTen)
    }
  }

  render () {
    console.log('inside render: ', this.props)
    var articles = this.props.articles || topten;
    return (
      <div >
        {articles.map((article, index) => {
          return <div 
            key={index} 
            style={styles.article}>
              <Article article={article}/>
            </div>
        })}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    articles: state.articles,
    activeWord: state.activeWord
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({getArticles: getArticles}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
