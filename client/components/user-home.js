import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokemonParty from './pokemonparty';
import Training from './training';
/**
 * COMPONENT
 */
class UserHome extends React.Component {

  // componentDidMount(){

  // }

  render(){
    const { username, pokemon } = this.props;
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
  }
}

// const mapDispatch = { postSocketId }

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
