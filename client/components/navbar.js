import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, fetchOpponent } from '../store';
import socket from '../socket';

class Navbar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.battleClick = this.battleClick.bind(this)
    this.challenge = this.challenge.bind(this)
  }

  handleClick() {
    this.props.logout()
  }

  challenge(opponentId, msg) {
    socket.emit('battle click', opponentId, msg)
  }

  //does not work on first click
  battleClick() {
    this.props.fetchOpponent(this.props.user.id)
    if (this.props.opponent.opponentSocketId) {
      socket.on('battle click', this.challenge(this.props.opponent.opponentSocketId, `${this.props.user.username} challenges you to a battle!`))
    }
  }

  render() {
    const { isLoggedIn, user } = this.props;
    return (
      <div>
        <Link to='/home'><img src='https://fontmeme.com/permalink/180322/3dfe322ae57284bad89b0a9f92ab5ae5.png' alt='pokemon-font' border='0' /></Link>
        <nav>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <Link to={`/mystats/${user.id}`}>My Statistics</Link>
              <Link onClick={this.battleClick} to={`/fights/${user.id}`}>Battle!</Link>
              <a href="#" onClick={this.handleClick}>Logout</a>
            </div>
          ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
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
    opponent: state.fight
  }
}

const mapDispatch = { logout, fetchOpponent }

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
