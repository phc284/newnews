import React from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');

const styles = {
  card: {
    margin: 'auto',
    width: '100%',
    'borderRadius': '5px',
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
    },
    text: {
      paddingTop: '0px',
      paddingBottom: '2px'
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
    <CardText expandable={true} style={styles.card.text}>
      {article.text.slice(0,200)}... <a target="_blank" href={article.url}>See More</a>
      <div>
        <div className="sharebutton">
          <FacebookShareButton url={article.url}>
            <FacebookIcon size={22} square />
          </FacebookShareButton>
        </div>
        <div className="sharebutton">
          <TwitterShareButton url={article.url}>
            <TwitterIcon size={22} square />
          </TwitterShareButton>
        </div>
        <div className="sharebutton">
          <GooglePlusShareButton url={article.url}>
            <GooglePlusIcon size={22} square />
          </GooglePlusShareButton>
        </div>
        <div className="sharebutton">
          <LinkedinShareButton url={article.url}>
            <LinkedinIcon size={22} square />
          </LinkedinShareButton>
        </div>
        <div className="sharebutton">
          <PinterestShareButton url={article.url}>
            <PinterestIcon size={22} square />
          </PinterestShareButton>
        </div>
        <div className="sharebutton">
          <RedditShareButton url={article.url}>
            <RedditIcon size={22} square />
          </RedditShareButton>
        </div>
        <div className="sharebutton">
          <EmailShareButton url={article.url}>
            <EmailIcon size={22} square />
          </EmailShareButton>
        </div>
      </div>
    </CardText>
  </Card>
);

export default Article;
