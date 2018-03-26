import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import BattleModalPokemon from './battle-modPokemon'
import {closeModal} from '../store';

class BattleModal extends Component {


  // declineBattle = () => {
  //   closeModal();
  // }

  render(){
    console.log('HI PROPS', this.props)
    const {decline, showBattleModal, msg} = this.props
    
    if(showBattleModal === false){
      return null;
    }

    let modalStyle = {
      content : {
        position: 'absolute',        
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        backgroundColor: 'rgba(255,255,255)'          
      }
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
        <div style={backdropStyle}>
          <Modal 
            open={showBattleModal} 
            styles={modalStyle}
            onClose={decline}
            closeButton={true}>
            <h2>{msg}</h2>
            <BattleModalPokemon />
          </Modal>
        </div>
      )
  }
}

const mapState = (state) => ({
  showBattleModal: state.battleModal.isOpen, 
  msg: state.battleModal.msg
})

const mapDispatch = (dispatch) => ({
  decline: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(BattleModal)
