import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import BattleModalPokemon from './battle-modPokemon'
import {closeModal} from '../store';

class BattleModal extends Component {

  render(){
    const {decline, showBattleModal, msg} = this.props
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

    if(showBattleModal === false){
      return null;
    } else {
      return (
        <div>
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
}

const mapState = (state) => ({
  showBattleModal: state.battleModal.isOpen, 
  msg: state.battleModal.msg
})

const mapDispatch = (dispatch) => ({
  decline: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(BattleModal)
