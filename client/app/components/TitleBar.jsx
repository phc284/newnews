import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    background: '#546e7a',
    height: 60,
    margin: 'auto',
    marginBottom: '15px',
    width: '90%'
  }
};

const marquee = 'New News                         Breaking the Bubble                         Connecting the Dots                         New News                         Solving the Puzzle                         Bridging the Gap                         New News'

const TitleBar = () => (
  <AppBar
    style={styles.title}
    showMenuIconButton={false}
    title={<p className="microsoft marquee"><span>{marquee}</span></p>}
  />
);

export default TitleBar;
