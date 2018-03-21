import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokemonParty from './pokemonparty';
import Training from './training';
import socket from '../socket';
import {postSocketId} from '../store';
/**
 * COMPONENT
 */
class UserHome extends React.Component {

  componentDidMount(){
    this.props.postSocketId(this.props.id, socket.id)
  }

  render(){
    const { id, username, pokemon } = this.props;
    return (
      <div>
        <h3>Welcome, {username}</h3>
        <PokemonParty pokemon={pokemon} />
        <Training />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    pokemon: state.user.pokemons,
    username: state.user.username,
    id: state.user.id
  }
}

const mapDispatch = { postSocketId }

export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
