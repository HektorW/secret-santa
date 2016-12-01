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
        <h1 className='handwriting'>Elfsberg Tomte</h1>
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
        <Link to='/register'>Registrera en ny tomte</Link>
        {loginError ? renderError(loginError) : null}
      </div>
    )
  }  
}

function renderError(error) {
  if (error.status === 401) {
    return (
      <div>
        <p>Det finns ingen användare som passar den här användarnamn/lösenords kombinationen.</p>
        <p><small>PS. Om du har glömt ditt lösenord, hör av dig till Hektor.</small></p>
      </div>
    )
  }

  return (
    <div>
      <p>Något gick snett :(.</p>
      <p>Testa en gång till.</p>
      <p><small>Hör av dig till Hektor om det fortsätter strula.</small></p>
    </div>
  )
}


