import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokemonParty from './pokemonparty';
import Training from './training';
/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, pokemon } = props;
  console.log(`props! `, props)
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <PokemonParty pokemon={pokemon} />
      <Training />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  console.log(`STATE`, state)
  return {
    email: state.user.email,
    pokemon: state.user.pokemons
  }
}

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
