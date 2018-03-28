import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import BattleModalPokemon from './battle-modPokemon'
import { closeModal } from '../store';
import currentPokemon from '../store/currentPokemon';
import battle from '.';

class BattleModal extends Component {

  render() {
    const { close, showBattleModal, msg } = this.props
    let modalStyle = {
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        backgroundColor: 'rgba(255,255,255, 0.363)'
      }
    }

    if (showBattleModal === false) {
      return null;
    } else {
      return (
        <div>
          <Modal
            open={showBattleModal}
            styles={modalStyle}
            onClose={close}
            closeButton={true}>
            <h2>{msg}</h2>
            <img src={this.props.challenger.imageUrl} />
            <BattleModalPokemon />
          </Modal>
        </div>
      )
    }
  }
}

const mapState = (state) => ({
  showBattleModal: state.battleModal.isOpen,
  msg: state.battleModal.msg,
  challenger: state.battleModal.pokemon
})

const mapDispatch = (dispatch) => ({
  close: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(BattleModal)
