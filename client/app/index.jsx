import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './components/App.jsx';
import Footer from './components/Footer.jsx'
import store from './store.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

console.log(store.getState());
render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
