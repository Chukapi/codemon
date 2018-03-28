import React, { Component } from 'react';
import Training from './training';
import { initBattle } from '../store';
import { connect } from 'react-redux';
import socket from '../socket';


class Battle extends Component {

  componentDidMount() {
    this.props.initBattle()
  }

<<<<<<< HEAD
  render(){
    const {pokemons, prepare } = this.props;
    console.log(prepare, "PREPARE")
    return (
      <div>
      {/* {Object.keys(prepare).length !== 0 ? <h1> HI </h1> : <h1> BYE  </h1> } */}
        { prepare === null ? <div><img src="https://i.ytimg.com/vi/n03yTW2_ZSw/maxresdefault.jpg" /> </div> :
           <div>{pokemons[0] && <img src={pokemons[0].imageUrl} />}
           {pokemons[0] && <p>{pokemons[0].exp}</p>}
           <h1>VS.</h1>
           {pokemons[0] && <img src={pokemons[1].imageUrl} />}
           {pokemons[0] && <p>{pokemons[1].exp}</p>}
           <Training />
           </div>

        }
=======
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <div className="battle-poke-opp">
          {pokemons[0] && <img src={pokemons[0].imageUrl} />}
          <h1>VS.</h1>
          {pokemons[0] && <img src={pokemons[1].imageUrl} />}
        </div>

        <div className="battle-problem">
          <Training />
        </div>
>>>>>>> master
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
