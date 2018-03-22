import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, fetchOpponent } from '../store';

const Navbar = ({ handleClick, battleClick, isLoggedIn, id }) => {
  return (
    <div>
      <Link to='/home'><img src='https://fontmeme.com/permalink/180322/3dfe322ae57284bad89b0a9f92ab5ae5.png' alt='pokemon-font' border='0' /></Link> <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to={`/mystats/${id}`}>My Statistics</Link>
            <Link to={`/fights/${id}`}>Battle!</Link>
            <a href="#" onClick={handleClick}>Logout</a>
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
    </div >
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    id: state.user.id,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    battleClick(id) {
      dispatch(fetchOpponent(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
