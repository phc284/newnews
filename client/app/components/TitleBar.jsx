import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    background: '#3F51B5',
    height: 60,
    marginBottom: '15px'
  },
};

const TitleBar = () => (
  <AppBar
    style={styles.title}
    title={<span >New News</span>}
  />
); 

export default TitleBar;
