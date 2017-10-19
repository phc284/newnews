import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    background: '#3F51B5',
    height: 60,
    margin: 'auto',
    marginBottom: '15px',
    width: '90%'
  }
};

const TitleBar = () => (
  <AppBar
    style={styles.title}
    showMenuIconButton={false}
    title={<span >New News</span>}
  />
);

export default TitleBar;
