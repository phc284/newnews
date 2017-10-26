import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Map from "./Map.jsx";
import AppBar from "../components/TitleBar.jsx";
import Articles from "./ArticlesList.jsx";
import Marquee from "./Marquee.jsx";
import { Link } from 'react-router-dom'


const Homepage = () => (
  <div>
  <div className="aboutus">
    <Link to='/about'>About Us</Link>
  </div>
    <div className='title'>
      NewNews
    </div>
    <div className='marqueeBar'>
      <Marquee />
    </div>
    <div style={{ marginBottom: "15px", display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Map />
      <Articles />
    </div>
  </div>
);

export default Homepage;
