import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    background: '#8493a8',
    height: 60,
    margin: 'auto',
    marginBottom: '2px',
    width: '100%',
  }
};

const TitleBar = () => (
  <AppBar
    style={styles.title}
    showMenuIconButton={false}
    title={<span> NewNews </span>}
  />
);

export default TitleBar;
