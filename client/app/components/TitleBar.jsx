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

const array = ['United States', 'Donald Trump', 'Stock', 'George W. Bush', 'Joint C'
]
const marquee = 'NewNews                         Breaking the Bubble                         Connecting the Dots                         NewNews                         Solving the Puzzle                         Bridging the Gap                         NewNews'

const TitleBar = () => (
  <AppBar
    style={styles.title}
    showMenuIconButton={false}
    title={<p className="microsoft marquee"><span><a target='_blank' href='http://www.yahoo.com'>iPhone explodes when put in microwave</a><a target='_blank' href='http://www.yahoo.com'>     World Piece Achieved through the power of Potatoes</a><a target='_blank' href='http://www.yahoo.com'>     Genius Squirrel Invents Cure For Cancer</a></span></p>}
  />
);

export default TitleBar;
