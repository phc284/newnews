import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Homepage from './Homepage.jsx';
import About from './About.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const App = () => (
  <Router>
    <MuiThemeProvider history={history}>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/about' component={About} />
    </MuiThemeProvider>
  </Router>
);

export default App;
