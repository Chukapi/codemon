import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {setCurrentPokemon} from '../store'
Modal.setAppElement("#app")

class BattleModal extends Component {
  
  handleClick = (evt, pokeId) => {
    this.props.setCurrent(pokeId)
  }

  render(){
    console.log('IN BATTLE MODAL', this.props)
    if(this.props.showBattleModal === false){
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
          <Modal isOpen={this.props.showBattleModal} style={modalStyle}>
            <h2>{this.props.msg}</h2>
            <p>Select one of your Pokemon and click "Battle!" to accept your opponent's challenge</p>
            {this.props.pokemons.map(pokemon => {
              return (
                  <img className="poke-images" key={pokemon.id} onClick={(evt) => this.handleClick(evt, pokemon.id)} src={pokemon.imageUrl} />
              )
            })}
            <div>
              <button>Battle!</button>
              <button>Decline</button>
            </div>
          </Modal>
        </div>
      )
  }
}

const mapState = (state) => ({
  pokemons: state.user.pokemons,
  showBattleModal: state.battleModal.isOpen, 
  msg: state.battleModal.msg
})

const mapDispatch = (dispatch) => ({
  setCurrent: (poke) => dispatch(setCurrentPokemon(poke))
})

export default connect(mapState)(BattleModal)
