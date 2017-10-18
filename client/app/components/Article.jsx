import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const styles = {//remove this style object after creating article list component, add margin to top of that component instead
  card: {
    marginTop: '15px',
    width: '90%',
    margin: 'auto',
    icon: {
      float: 'left',
      marginRight: '5px',
      marginBottom: '3px'
    },
    country: {
      fontWeight: 'bold',
      // display: 'inline'
    },
    thumbnail: {
      width: '50%',
      maxWidth: '40px',
      border: '1px solid',
      borderColor: 'cadetblue',
      display: 'inline-block'
    },
    titleStyle: {
      fontWeight: 'bold',
      fontSize: '18px'
    },
    text: {
      marginLeft: '20px',
      marginRight: '20px'
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
      avatar={articleObj.imgUrl ? articleObj.imgUrl : <i className="material-icons" style={styles.card.icon}>bubble_chart</i>}
      // children={
      //   articleObj.imgUrl !== null ?
      //     <div>
      //       <img src={articleObj.imgUrl} style={styles.card.thumbnail}/>
      //       <div style={styles.card.title}>{articleObj.title}</div>
      //       <p style={styles.card.country}>{articleObj.country}</p>
      //     </div> :
      //     <div>
      //       <p style={styles.card.country}>{articleObj.country}</p>
      //       <i className="material-icons" style={styles.card.icon}>bubble_chart</i>
      //     </div>
      // }
      title={articleObj.title}
      subtitle={articleObj.source}
      actAsExpander={true}
      showExpandableButton={true}
      titleStyle={styles.card.titleStyle}
    />
    <CardText expandable={true} style={styles.card.text}>
      {articleObj.text}...<a href={articleObj.articleUrl}>{articleObj.articleUrl}</a>
    </CardText>
  </Card>
);

export default Article;
