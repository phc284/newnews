import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Chart from '../containers/Chart.jsx';

const customContentStyle = {
  width: '50%',
  maxHeight: '50%'
};


class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen () {
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
        >
          <Chart />
        </Dialog>
      </div>
    );
  }
}

export default Modal;