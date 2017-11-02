import React from 'react';
import Article from '../components/Article.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticles, selectTag } from '../actions';
import List from 'material-ui/List';
import GridList from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import axios from 'axios';

const styles = {
  article: {
    marginBottom: '5px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '44%',
  },
  paper: {
    overflow: 'overlay',
    maxHeight: '75%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'none'
  },
  list: {
    width: '95%',
    padding: '0px'
  }
};

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    axios.get('/keys')
    .then( response => {
      let articles = response.data.topArticles;
      console.log(articles);
      this.setState({articles: articles});
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.activeWord !== this.props.activeWord) {
      nextProps.getArticles(nextProps.activeWord);
    }
  }

  render () {
    const articles = this.props.articles || this.state.articles;
    return (
      <div style={styles.container}>
        <Paper zDepth={0} style={styles.paper}>
          <List style={styles.list}>
            {articles.map((article, index) => {
              if (article) {
                return <div
                  key={index}
                  style={styles.article}>
                    <Article handleTouchTap={this.props.selectTag} article={article} concepts={article.concepts}/>
                  </div>
              }})}
          </List>
        </Paper>
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
  return bindActionCreators({
    getArticles: getArticles,
    selectTag: selectTag
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
