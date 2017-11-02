import React, { Component } from "react";
import { Link } from "react-router-dom";

const style = {
  about: {
    color: 'black',
    position: 'absolute',
    right: 15,
    textDecoration: 'underline',
    bottom: 2,
    color: 'white',
  },
  title: {
    marginRight: 25,
    position: 'absolute',
    bottom: 0,
    left: 10,
    color: 'white',
    fontSize: 18
  },
  Header: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 30,
  },
  text: {
    display: 'flex',
    alignItems: 'center'
  },
};

const Header = () => (
  <div style={style.Header}>
    <div style={style.text}>
      <div style={style.title}>NewNews</div>
      <Link to="/about"><div style={style.about}>About Us</div></Link>
    </div>
  </div>
);

export default Header;
