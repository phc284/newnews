import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const styles = {
  title: {
    background: '#8493a8',
    height: 60,
    margin: 'auto',
    marginBottom: '2px',
    width: '100%',
  }
};

const SearchBar = () => (
  <AppBar
    style={styles.title}
    showMenuIconButton={false}
  >
    <TextField hintText="Search by keyword or phrase">
    </TextField>
  </AppBar>
);

export default SearchBar;
