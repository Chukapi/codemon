import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokemonParty from './pokemonparty';
import Training from './training';
import socket from '../socket';
import {
  postSocketId,
  fetchPokemon,
  fetchWildInfo,
} from '../store';
import SinglePokemon from './singlepokemon';
import BattleModal from './battle-modal';

/**
 * COMPONENT
 */

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
class UserHome extends Component {

  componentDidMount() {
    const { id } = this.props;

    postSocketId(id, socket.id)
    this.props.loadPokemon(id);
    this.props.loadWildInfo(id);
  }

  render() {
    const { username, pokemon } = this.props;
    return (
      <div>
        <h2>Welcome, {username}</h2>
        <p>You have {pokemon.length} Pokemon! To train your Pokemon, select one of your Pokeballs and solve the problem below.</p>
        <p> To catch 'em all, stay on the lookout for wild Pokemon attacks!</p>
        <PokemonParty />
        <br />
        <div className="training-container">
          <SinglePokemon />
          <Training />
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  email: state.user.email,
  pokemon: state.allPokemon,
  username: state.user.username,
  id: state.user.id,
});

const mapDispatch = dispatch => ({
  loadPokemon: id => dispatch(fetchPokemon(id)),
  loadWildInfo: id => dispatch(fetchWildInfo(id))
});

export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
