import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    background: '#8493a8',
    height: 60,
    margin: 'auto',
    marginBottom: '15px',
    width: '100%'
  }
};

const marquee = 'NewNews                         Breaking the Bubble                         Connecting the Dots                         NewNews                         Solving the Puzzle                         Bridging the Gap                         NewNews'

const TitleBar = () => (
  <AppBar
    style={styles.title}
    showMenuIconButton={false}
    title={<p className="microsoft marquee"><span>{marquee}</span></p>}
  />
);

export default TitleBar;
