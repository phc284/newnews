import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Chart from '../components/Chart.jsx';
import { connect } from 'react-redux';
import { hideModal } from '../actions';
import { bindActionCreators } from 'redux';


const customContentStyle = {
  width: '40%',
  maxHeight: '40%'
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose () {
    this.props.hideModal();
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
      console.log('props in modal', this.props),
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
        >
          <Chart tag={this.props.tag}/>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    tag: state.activeTag.tag,
    open: state.activeTag.showModal
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    hideModal: hideModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);