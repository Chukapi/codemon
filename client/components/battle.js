import React, { Component } from 'react';
import Training from './training';
import { initBattle } from '../store';
import { connect } from 'react-redux';
import socket from '../socket';


class Battle extends Component {

  componentDidMount() {
    this.props.initBattle()
  }

  render(){
    const {pokemons, prepare } = this.props;
    console.log(prepare, "PREPARE")
    return (
      <div>
        { prepare === null ? <div><img src="https://i.ytimg.com/vi/n03yTW2_ZSw/maxresdefault.jpg" /> </div> :
           <div>{pokemons[0] && <img src={pokemons[0].imageUrl} />}
           {pokemons[0] && <p>{pokemons[0].exp}</p>}
           <h1>VS.</h1>
           {pokemons[0] && <img src={pokemons[1].imageUrl} />}
           {pokemons[0] && <p>{pokemons[1].exp}</p>}
           <Training />
           </div>

        }
      </div>
    )
  }

}

const mapState = function (state) {
  return {
    pokemons: state.fight.pokemon,
    inBattle: state.training.inBattle,
    prepare: state.fight.fightInfo.opponentPokemonId,
  }
}

const mapDispatch = { initBattle }

export default connect(mapState, mapDispatch)(Battle)
