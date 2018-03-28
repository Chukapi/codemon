import React from 'react';
import { connect } from 'react-redux';

function UserStats(props) {

  const { email, username, pokemon } = props;

  return (
    <div id="stats-container">
      <div>
        <h1>{username}'s Statistics!</h1>
        <h3> Your email: {email}</h3>
        <h3> Your Pokemon:
          <div className="poke-stats">
            {pokemon.map(poke =>
              (<div className="single-poke-stat" key={poke.id}>
                <h3>{poke.name}</h3>
                <p>Exp: {poke.exp}</p>
                <img src={poke.imageUrl} />
              </div>
              )
            )}
            <br />
          </div>
        </h3>
      </div>
    </div>
  )

}

const mapState = (state) => {
  return {
    email: state.user.email,
    pokemon: state.allPokemon,
    username: state.user.username,
    id: state.user.id
  }
}

export default connect(mapState, null)(UserStats)
