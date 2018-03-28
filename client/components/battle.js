import React, { Component } from 'react';
import Training from './training';
import { initBattle } from '../store';
import { connect } from 'react-redux';
import socket from '../socket';

class Battle extends Component {

  componentDidMount() {
    this.props.initBattle()
  }

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
      </div>
    )
  }

}

const mapState = function (state) {
  return {
    pokemons: state.fight.pokemon,
    inBattle: state.training.inBattle
  }
}

const mapDispatch = { initBattle }

export default connect(mapState, mapDispatch)(Battle)
