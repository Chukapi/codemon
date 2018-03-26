import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchWildProblem, fetchWildPokemon } from '../store';
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
    const { showModal, onCloseModal } = this.props;
    return (
      <div>
        <Modal
          open={showModal}
          onClose={onCloseModal}
          styles={customStyles}
          little
          classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
        >
          <h2>Modal</h2>
        </Modal>
      </div>
    )
  }
}

const mapState = state => ({
  openModal: state.showModal
});

const mapDispatch = dispatch => ({
  onCloseModal: () => dispatch(hideModal())
})

export default connect(mapState, mapDispatch)(WildPokemonModal);
