import React, { Component, PropTypes } from 'react'
import './login-form.css'

import Present from '../../../components/svg/Present'
import santaIconSrc from '../../../res/svg/ic_santa.svg'

export default class LoginForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorText: PropTypes.string,
  } 

  state = {
    registerActive: false,
  }

  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.toggleRegister = this.toggleRegister.bind(this)
  }

  toggleRegister(event) {
    event.preventDefault()
    this.setState({ registerActive: !this.state.registerActive })
  }

  onSubmit(event) {
    event.preventDefault()
    const { realname, username, password } = this.refs
    const { registerActive } = this.state
    const { login, register } = this.props
    if (registerActive) {
      register(realname.value, username.value, password.value)
    } else {
      login(username.value, password.value)
    }
  }

  render() {
    const { registerActive } = this.state
    const { isLoading, errorText } = this.props

    return (
      <div>
        <h1 className='big-name elfsberg-title'>
          Elfsbergs<br />
          <span><Present color='rgba(229, 206, 129, .7)' />Tomte</span>
        </h1>

        <div className={`login-form${registerActive ? ' register-active' : ''}`} >
          <button className='toggle-btn' onClick={this.toggleRegister}>
            {registerActive
              ? <span className="back-text"><span className='icon-navigate_before' />Tillbaka till logga in</span>
              : <span className="add-text"><img role='presentation' src={santaIconSrc} />Skapa en ny tomte</span>
            }
          </button>

          <form onSubmit={this.onSubmit}>
            {registerActive
              ? <input type='text' ref='realname' className='input realname' placeholder='Riktigt namn' />
              : null
            }
            <input type='text' ref='username' className='input username' placeholder='Användarnamn' />
            <input type='password' ref='password' className='input password' placeholder='Lösenord' />

            <button className='action-btn'>
              <span className="login-text"><span className='icon-key' />Logga in</span>
              <span className="register-text"><img role='presentation' src={santaIconSrc} />Skapa tomte</span>
            </button>
          </form>

          {isLoading
            ? <div>Laddar...</div>
            : null
          }

          {errorText
            ? <p>{errorText}</p>
            : null
          }
        </div>
      </div>
    )
  }
}
