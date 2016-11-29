import React, { Component, PropTypes } from 'react'
import './RegisterInput.css'

export default class RegisterInput extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
  }

  onSubmit(event) {
    event.preventDefault()
    const realName = this.refs.realName.value
    const username = this.refs.username.value
    const password = this.refs.password.value
    this.props.register(realName, username, password)
  }

  render() {
    return (
      <div className='register-input'>
        <h1>Register</h1>
        <form onSubmit={event => this.onSubmit(event)}>
          <label>
            <span>Riktigt namn: </span>
            <input type='text' ref='realName' placeholder='Riktigt namn' />
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
      </div>
    )
  }  
} 
