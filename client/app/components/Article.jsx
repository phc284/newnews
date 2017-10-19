import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  card: {
    margin: 'auto',
    width: '90%',
    icon: {
      float: 'left',
      marginRight: '5px',
      marginBottom: '3px'
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

const articleObj = {
  imgUrl: "http://www.abc.net.au/news/image/8789062-1x1-700x700.jpg",
  articleUrl: "http://www.abc.net.au/news/2017-08-17/same-sex-marriage-not-all-views-deserve-respect/8816096",
  country: "AU",
  source: "abc.net.au",
  title: "When it comes to same-sex marriage, not all views deserve respect",
  text: "Ideas have no such empathetic traction. Unlike people they cannot suffer, they do not know joy, and they do not contribute by themselves to the happiness of others. That is not to say there are no really good or really bad ideas."
};

const Article = () => (
  <Card style={styles.card}>
    <CardHeader
      avatar={articleObj.imgUrl ? <img src={articleObj.imgUrl} style={styles.card.avatar}></img> : <i className="material-icons" style={styles.card.icon}>bubble_chart</i>}
      title={articleObj.title}
      titleStyle={styles.card.title}
      subtitle={articleObj.source}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      {articleObj.text}...<a target="_blank" href={articleObj.articleUrl}>See More</a>
    </CardText>
  </Card>
);

export default Article;
