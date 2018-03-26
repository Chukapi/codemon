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
class UserHome extends Component {

  componentDidMount() {
    const { id } = this.props;

    postSocketId(id, socket.id)
    this.props.loadPokemon(id);
    this.props.loadWildInfo(id);
  }

  render() {
    const { username } = this.props;
    return (
      <div>
        <h2>Welcome, {username}</h2>
        <h4>Here are your current Pokemon! To train your Pokemon, select one of your Pokeballs and solve the problem below. To catch 'em all, stay on the lookout for wild Pokemon attacks!</h4>
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
