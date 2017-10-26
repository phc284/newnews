import React, { Component } from 'react';
// import {AppBar} from 'material-ui';

const style = {
  wrapper: {
    backgroundColor: '#fafafa',
    padding: 0,
    height: 100
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Footer" style={style.wrapper}>
          <div className="copywrite">dotConnection</div>
        </div>
    );
  }
}

export default Footer;
