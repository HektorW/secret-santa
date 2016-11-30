import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class LoginInput extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  onSubmit(event) {
    event.preventDefault()
    const username = this.refs.username.value
    const password = this.refs.password.value
    this.props.login(username, password)
  }

  render() {
    const { loginError } = this.props
    return (
      <div className='login-input'>
        <h1>Login</h1>
        <form onSubmit={event => this.onSubmit(event)}>
          <label>
            <span>Användarnamn: </span>
            <input
              type='text'
              ref='username'
              placeholder='Användarnamn'
            />
          </label>
          <label>
            <span>Lösenord: </span>
            <input
              type='password'
              ref='password'
              placeholder='Lösenord'
            />
          </label>
          <input type='submit' value='Logga in' />
        </form>
        <Link to='/register'>Registrera</Link>
        {!loginError ? null : (
          <div>{loginError.message}</div>
        )}
      </div>
    )
  }  
}
