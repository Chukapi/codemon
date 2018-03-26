import React, { Component } from 'react';
import { connect } from 'react-redux';
import Training from './training';
import Modal from 'react-responsive-modal';
import { hideModal } from '../store';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class WildPokemonModal extends Component {

  render() {
    const { open, wildPokemon, wildProblem, onCloseModal } = this.props;
    return (
      <div className='wild-poke-attack'>
        <Modal
          open={open}
          onClose={onCloseModal}
          styles={customStyles}
          little
          classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
        >
          <img src={wildPokemon.imageUrl} />
          <h3>Wild {wildPokemon.name} has attacked!</h3>
          <p>To catch it, solve the problem below</p>
          <div className='wild-poke-code-area'>
            <Training />
          </div>
        </Modal>
      </div>
    )
  }
}

const mapState = state => ({
  open: state.wildModal.showModal,
  wildPokemon: state.wildModal.wildPokemon,
  wildProblem: state.wildModal.wildProblem
});

const mapDispatch = dispatch => ({
  onCloseModal: () => dispatch(hideModal())
})

export default connect(mapState, mapDispatch)(WildPokemonModal);
