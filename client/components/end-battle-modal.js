import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import {closeEndModal} from '../store';

class EndBattleModal extends Component {

  render(){
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
    const {pokemons, showEndBattleModal, closeEndModal, msg} = this.props
    if(this.props.showEndBattleModal === false){
      return null;
    } else {
      return (
        <div>
          <Modal 
            open={showEndBattleModal} 
            styles={modalStyle}
            onClose={closeEndModal}
            closeButton={true}>
            <h1>{msg}</h1>
            {pokemons[0] && <img src={pokemons[0].imageUrl} />}
            {pokemons[0] && <p>{pokemons[0].exp}</p>}
            <h1>VS.</h1>
            {pokemons[0] && <img src={pokemons[1].imageUrl} />}
            {pokemons[0] && <p>{pokemons[1].exp}</p>}
            <button>I need more training.</button>
            <button>Rematch!</button>     
          </Modal>
        </div>
      )
    }
  }
}

const mapState = (state) => ({
  showEndBattleModal: state.training.viewModal, 
  msg: state.training.resultMsg,
  pokemons: state.fight.pokemon
})

const mapDispatch = {closeEndModal}

export default connect(mapState, mapDispatch)(EndBattleModal)
