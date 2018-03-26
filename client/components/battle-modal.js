import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';


class BattleModal extends Component {

  render(){
    console.log('IN BATTLE MODAL', this.props)
    if(this.props.showBattleModal === false){
      return null;
    }
    let modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      background: '#fff'
    }

    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }
      return (
        <div>
          <div style={modalStyle}>
            <h2>HELLO</h2>
          </div>
          <div style={backdropStyle}/>
        </div>
      )
  }
}

const mapState = (state) => ({
  showBattleModal: state.battleModal, 
  // msg: state.battleModal.msg
})

export default connect(mapState)(BattleModal)
