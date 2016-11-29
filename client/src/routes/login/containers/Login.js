import React from 'react'
import { connect } from 'react-redux'
import LoginInput from '../components/LoginInput'
import { login } from '../modules/login'
import Loader from '../../../components/Loader'
import CheckLoggedIn from '../../../containers/CheckLoggedIn'

const Login = props => (
  <CheckLoggedIn>
    {renderComponent(props)}
  </CheckLoggedIn>
)


const renderComponent = ({ isLoggingIn, login }) => {
  if (isLoggingIn) {
    return <Loader text='Logging in' />
  }

  return <LoginInput login={login} />
}



const mapStateToProps = ({ login }) => ({
  isLoggingIn: login.isLoggingIn,
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


// import React from 'react'
// import { connect } from 'react-redux'
// import LoginInput from '../components/LoginInput'
// import CheckLoggedIn from '../../../containers/CheckLoggedIn'

// const Login = () => (
//   <CheckLoggedIn>
//     <LoginInput />
//   </CheckLoggedIn>
// )

// export default connect()(Login)
