import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Map from "../containers/Map.jsx";
import Articles from "../containers/ArticlesList.jsx";
import Marquee from "./Marquee.jsx";
import Footer from './Footer.jsx';
import Modal from '../containers/Modal.jsx';
import SearchBar from './SearchBar.jsx';
import Header from './Header.jsx';

const Homepage = () => (
  <div>
    <Header />
    <Modal />
    <div style={{ marginTop: '30px', marginBottom: "2px", display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Map />
    </div>
    <div className='marqueeBar'>
      <Marquee />
    </div>
    <Articles />
    <Footer />
  </div>
);

export default Homepage;
