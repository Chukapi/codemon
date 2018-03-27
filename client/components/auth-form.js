import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth, auth2 } from '../store'
import socket from '../socket'

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error, isSignUp } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        {isSignUp &&
          <div>
            <label htmlFor="username"><small>Username</small></label>
            <input name="username" type="text" />
          </div>
        }
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state, ownProps) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
    isSignUp: ownProps.match.path === '/signup',
    pokemon: state.wildModal.wildPokemon
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();

      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      const socketId = socket.id;

      if (ownProps.match.path === '/signup') {
        const username = evt.target.username.value;
        dispatch(auth(username, email, password, formName, socketId));
      } else {
        dispatch(auth2(email, password, formName, socketId));
      }
    }
  }
}

// export const getSocket = connect(mapState, mapDispatch)(AuthForm)
export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
