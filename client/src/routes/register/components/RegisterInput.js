import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './RegisterInput.css'

export default class RegisterInput extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
  }

  onSubmit(event) {
    event.preventDefault()
    const realname = this.refs.realname.value
    const username = this.refs.username.value
    const password = this.refs.password.value
    this.props.register(realname, username, password)
  }

  render() {
    const { registerError } = this.props

    return (
      <div className='register-input'>
        <h1>Skapa en elf</h1>
        <form onSubmit={event => this.onSubmit(event)}>
          <label>
            <span>Riktigt namn: </span>
            <input type='text' ref='realname' placeholder='Riktigt namn' />
          </label>
          <label>
            <span>Användarnamn:</span>
            <input type='text' ref='username' placeholder='Användarnamn' />
          </label>
          <label>
            <span>Lösenord:</span>
            <input type='password' ref='password' placeholder='Lösenord' />
          </label>
          <input type='submit' value='Registrera' />
        </form>
        <Link to='/login'>Till inlogg</Link>
        {registerError ? renderError(registerError) : null}
      </div>
    )
  }  
}

function renderError(error) {
  if (error.data.alreadyExists) {
    return (
      <div>
        <p>Det finns redan någon registrerad med det användarnamnet.</p>
        <p><small>PS. Om du har glömt ditt lösenord, hör av dig till Hektor.</small></p>
      </div>
    )
  }

  return (
    <div>
      <p>Något gick snett :(.</p>
      <p>Testa en gång till.</p>
      <p><small> Hör av dig till Hektor om det fortsätter strula.</small></p>
    </div>
  )
}
