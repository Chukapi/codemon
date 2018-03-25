import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokemonParty from './pokemonparty';
import Training from './training';
import socket from '../socket';
import { postSocketId, fetchPokemon } from '../store';
import SinglePokemon from './singlepokemon';
import BattleModal from './battle-modal';

/**
 * COMPONENT
 */
class UserHome extends React.Component {

  componentDidMount() {
    postSocketId(this.props.id, socket.id)
    this.props.loadPokemon(this.props.id);
  }

  render() {
    const { username } = this.props;
    return (
      <div>
        <h3>Welcome, {username}</h3>
        <PokemonParty />
        <SinglePokemon />
        <Training />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => ({
  email: state.user.email,
  pokemon: state.allPokemon,
  username: state.user.username,
  id: state.user.id,
})

const mapDispatch = dispatch => ({
  loadPokemon: (id) => dispatch(fetchPokemon(id))
});

export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
