import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, fetchOpponent, startFight } from '../store';
import socket from '../socket';

class Navbar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.battleClick = this.battleClick.bind(this)
  }

  handleClick() {
    this.props.logout()
  }

  invalidBattleClick(){
    alert('Please select a Pokemon in your Gym to battle with.')
  }

  battleClick() {
    this.props.fetchOpponent(this.props.user.id)
    .then(opponent => {
      this.props.startFight({
        challengerSocket: this.props.user.socketId,
        opponentSocket: this.props.opponent.opponentSocketId,
        challengerPokemonId: this.props.currentPokemonId
      })
      socket.emit('battle click', this.props.opponent.opponentSocketId, `${this.props.user.username} challenges you to a battle!`, this.props.challengerPokemon)
    })
  }


  render() {
    const { isLoggedIn, user } = this.props;
    return (
      <div className="nav-bar-poke">
        <Link to="/home"><img className="logo-image" src="https://fontmeme.com/permalink/180322/3dfe322ae57284bad89b0a9f92ab5ae5.png" alt="pokemon-font" border="0" /></Link>
        <br />
        <nav>
          {isLoggedIn ? (
            <div className="nav-links">
              {/* The navbar will show these links after you log in */}
              <Link to="/home">GYM</Link>
              <Link to={`/mystats/${user.id}`}>STATISTICS</Link>&emsp;
              {this.props.currentPokemonId ? <Link onClick={this.battleClick} to={`/fights/${user.id}`}>BATTLE</Link> : <Link to="/home" onClick={this.invalidBattleClick}>BATTLE</Link>}&emsp;
              <a href="#" onClick={this.handleClick}>LOGOUT</a>
            </div>
          ) : (
              <div className="nav-links">
                {/* The navbar will show these links before you log in */}
                <Link to="/login">LOGIN</Link> &emsp;
                <Link to="/signup"> SIGN UP</Link>
              </div>
            )}
        </nav>
        <hr />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    isLoggedIn: !!state.user.id,
    opponent: state.fight,
    challengerPokemon: state.allPokemon.find(poke => poke.id === state.currentPokemonId),
    currentPokemonId: state.currentPokemonId
  }
}

const mapDispatch = { logout, fetchOpponent, startFight }

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
