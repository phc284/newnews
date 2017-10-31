import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import {fullWhite} from 'material-ui/styles/colors';


const styles = {
  title: {
    background: 'none',
    height: 60,
    margin: 'auto',
    marginBottom: '2px',
    width: '30%',
  },
  hint: {
    color: '#777777'
  },
  underline: {
    borderColor: '#ffffff',
  },
  text: {
    color: '#ffffff'
  }
};

//add onClick to text field when behavior is set

const SearchBar = () => (
  <AppBar
    style={styles.title}
    showMenuIconButton={false}
  >
    <TextField 
      hintText="Search by keyword or phrase" 
      hintStyle={styles.hint} 
      fullWidth={true}
      underlineFocusStyle={styles.underline}
      inputStyle={styles.text}
    />
    <FlatButton
      icon={<ActionSearch color={fullWhite}/>}
    />
  </AppBar>
);

export default SearchBar;
