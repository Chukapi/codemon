import React from 'react';
import { connect } from 'react-redux';

import {
  Card,
  CardTitle,
  CardText
} from "material-ui/Card";

function UserStats(props) {

  const { email, username, pokemon } = props;

    return (
      <div className="container">
      <div>
        <h1>{username}'s Statistics!</h1>
        <h3> Your email: {email}</h3>
        <h3> Your Pokemon:
          <Card >
          <CardText>
       {pokemon.map(poke => <CardTitle key={poke.id} title={poke.name} /> )} Experience Level: {pokemon.map(poke => poke.exp)}
        {pokemon.map(poke => <img src={poke.imageUrl} key={poke.id} />)}
        <br/>
        Evolution Level: {pokemon.map(poke => poke.evolutionLevel )}
        </CardText>
        </Card>
        </h3>
      </div>
      </div>
    )

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
