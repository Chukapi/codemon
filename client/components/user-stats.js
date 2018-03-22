import React from 'react';
import { connect } from 'react-redux';

class UserStats extends React.Component {
  componentDidMount(){
    console.log("UserStats props", this.props)
  }

  render(){
    const { email, username, pokemon } = this.props;
    return(
      <div>
        <h1>{username}'s Statistics!</h1>
        <h3> Your email: {email}</h3>
        <h3> Your Pokemon:
        <br/> {pokemon.map(poke => poke.name)} <br/> Experience Level: {pokemon.map(poke => poke.exp)}
        <br/>
        Evolution Level: {pokemon.map(poke => poke.evolutionLevel )}
        <br/>
        `url(${ {pokemon.map(poke => poke.imageUrl)} })`
        </h3>

      </div>
    )
  }
}

const mapState = (state) => {
  return {
    email: state.user.email,
    pokemon: state.user.pokemons,
    username: state.user.username,
    id: state.user.id
  }
}



export default connect(mapState, null)(UserStats)
