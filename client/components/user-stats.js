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
              {pokemon.map(poke =>
                (<div key={poke.id}>
                  <CardTitle title={poke.name} />
                  <img src={poke.imageUrl} />
                  <p>Experience Level: {poke.exp}</p>
                  <p>Evolution Level: {poke.evolutionLevel}</p>
                </div>
                )
              )}
              <br />
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
    pokemon: state.allPokemon,
    username: state.user.username,
    id: state.user.id
  }
}

export default connect(mapState, null)(UserStats)
