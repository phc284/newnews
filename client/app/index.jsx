import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import articles from './reducers/reducers.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Map from './containers/Map.jsx';
import AppBar from './components/TitleBar.jsx';
import Articles from './containers/ArticlesList.jsx';

const App = () => (
  <MuiThemeProvider>
    <AppBar />
    <Map />
    <Articles />
  </MuiThemeProvider>
);

render(<App/>, document.getElementById('app'));