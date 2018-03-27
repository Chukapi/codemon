import React, { Component } from 'react';
import { connect } from 'react-redux';
import Training from './training';
import Modal from 'react-responsive-modal';
import { hideModal } from '../store';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/snippets/javascript';


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

const WildPokemonModal = props => {
  const { open, wildPokemon, wildProblem, onCloseModal } = props;

  return (
    <div className='wild-poke-attack'>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={customStyles}
        little
        classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
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

const mapState = state => ({
  open: state.wildModal.showModal,
  wildPokemon: state.wildModal.wildPokemon,
  wildProblem: state.wildModal.wildProblem
});

const mapDispatch = dispatch => ({
  onCloseModal: () => dispatch(hideModal())
})

export default connect(mapState, mapDispatch)(WildPokemonModal);
