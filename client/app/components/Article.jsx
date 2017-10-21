import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  card: {
    margin: 'auto',
    width: '100%',
    icon: {
      margin: '10px',
      width: '52px'
    },
    country: {
      fontWeight: 'bold',
    },
    thumbnail: {
      maxWidth: '40px',
      border: '1px solid',
      borderColor: 'cadetblue'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '14px'
    },
    avatar: {
      width: '52px',
      height: '52px'
    }
  }
};

const Article = ({ article }) => (
  <Card style={styles.card}>
    <CardHeader
      avatar={article.main_image_url ? <img src={article.main_image_url} style={styles.card.avatar}></img> : <i className="fa fa-newspaper-o fa-3x" aria-hidden="true"></i>}
      title={article.title.length > 60 ? article.title.slice(0, 60).concat('...') : article.title}
      titleStyle={styles.card.title}
      subtitle={article.host}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      {article.text.slice(0,200)}... <a target="_blank" href={article.url}>See More</a>
    </CardText>
  </Card>
);

export default Article;
