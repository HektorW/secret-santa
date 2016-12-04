import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { login } from '../../../modules/login'
import { register } from '../../../modules/register'
import CheckLoggedIn from '../../../containers/CheckLoggedIn'

const renderComponent = ({ login, register, isLoading, errorText }) => {
  return (
    <LoginForm
      login={login}
      register={register}
      isLoading={isLoading}
      errorText={errorText}
    />
  )
}

const Login = props => (
  <CheckLoggedIn>
    {renderComponent(props)}
  </CheckLoggedIn>
)


const mapStateToProps = ({ login, register }) => ({
  isLoading: login.isLoggingIn || register.isRegistering,
  errorText: login.errorText || register.errorText,
})

const mapDispatchToProps = {
  login,
  register,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
