import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import {closeEndModal} from '../store';
import { Link } from 'react-router-dom';
import socket from '../socket';

class EndBattleModal extends Component {
  constructor(){
    super();
    this.rematchClick = this.rematchClick.bind(this)
  }

  rematchClick(){
    const {fight, user, currentPokemonId, usersPokemon} = this.props
    const sockets = [fight.challengerSocket, fight.opponentSocket];
    const socketId = sockets.find(socket => socket !== user.socketId);
    const pokemon = usersPokemon.find(poke => poke.id === currentPokemonId)
    if(socketId){
      socket.emit('battle click', socketId, `${user.username} challenges you to a rematch!`, pokemon)
    }
    this.props.closeEndModal();
  }

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
        backgroundColor: 'rgba(255,255,255, 0.363)'                  
      }
    }
    const {pokemons, showEndBattleModal, usersPokemon, currentPokemonId, closeEndModal, msg, winnerId, user} = this.props
    let winningPokemon;
    if(winnerId === user.id){
      winningPokemon = usersPokemon.find(poke => poke.id === currentPokemonId)
    } else {
      winningPokemon = pokemons.find(poke => poke.id !== currentPokemonId)
    }

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
            <div className="wild-poke-attack">
              <h1>{msg}</h1>
              <img src={winningPokemon.imageUrl}/>
              <p>{winningPokemon.exp} EXP</p>
              <br></br>
              <button onClick={closeEndModal}><Link to="/home">I need more training.</Link></button>
              <button onClick={this.rematchClick}>Rematch!</button> 
            </div>    
          </Modal>
        </div>
      )
    }
  }
}

const mapState = (state) => ({
  showEndBattleModal: state.training.viewModal, 
  msg: state.training.resultMsg,
  pokemons: state.fight.pokemon,
  winnerId: state.fight.fightInfo.winnerId,
  user: state.user, 
  usersPokemon: state.allPokemon,
  currentPokemonId: state.currentPokemonId,
  fight: state.fight.fightInfo
})

const mapDispatch = {closeEndModal}

export default connect(mapState, mapDispatch)(EndBattleModal)
