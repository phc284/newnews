import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Map from "../containers/Map.jsx";
import Articles from "../containers/ArticlesList.jsx";
import Marquee from "./Marquee.jsx";
import Footer from './Footer.jsx';
import Modal from '../containers/Modal.jsx';

const Homepage = () => (
  <div>
    <div className='title'>
      NewNews
    </div>
    <Modal />
    <div className='marqueeBar'>
      <Marquee />
    </div>
    <div style={{ marginBottom: "15px", display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Map />
      <Articles />
    </div>
    <Footer />
  </div>
);

export default Homepage;
