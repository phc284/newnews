import React from 'react';
import Article from '../components/Article.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticles } from '../actions';
import { topten } from '../../../watson/restructured_data.js';
import List from 'material-ui/List'
import Paper from 'material-ui/Paper'

//add redux functionality to access array of data objects in state

const styles = {
  article: {
    marginBottom: '5px',
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    width: '44%'
  },
  paper: {
    overflow: 'auto',
    maxHeight: '90%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#373737'
  }
}

class Articles extends React.Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.activeWord !== this.props.activeWord) {
      console.log(this.props.activeWord, nextProps.activeWord);
      nextProps.getArticles(nextProps.activeWord);
    }
  }

  render () {
    console.log('inside render: ', this.props)
    var articles = this.props.articles || topten;
    return (
      <div style={styles.list}>
        <Paper zDepth={0} style={styles.paper}>
          <List style={{width: '75%'}}>
            {articles.map((article, index) => {
              return <div
                key={index}
                style={styles.article}>
                  <Article article={article}/>
                </div>
            })}
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
  return bindActionCreators({getArticles: getArticles}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
