import React from 'react'
import { connect } from 'react-redux'
import LoginInput from '../components/LoginInput'
import { login } from '../modules/login'
import Loader from '../../../components/Loader'
import CheckLoggedIn from '../../../containers/CheckLoggedIn'

const renderComponent = ({ isLoggingIn, loginError, login }) => {
  if (isLoggingIn) {
    return <Loader text='Logging in' />
  }
  return <LoginInput login={login} loginError={loginError} />
}

const Login = props => (
  <CheckLoggedIn>
    {renderComponent(props)}
  </CheckLoggedIn>
)


const mapStateToProps = ({ login }) => ({
  isLoggingIn: login.isLoggingIn,
  loginError: login.loginError,
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
