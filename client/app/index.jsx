import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './containers/App.jsx';
import store from './store.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

console.log(store.getState());
render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
