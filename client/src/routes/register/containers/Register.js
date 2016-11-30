import React from 'react'
import { connect } from 'react-redux'
import RegisterInput from '../components/RegisterInput'
import { register } from '../modules/register'
import Loader from '../../../components/Loader'
import CheckLoggedIn from '../../../containers/CheckLoggedIn'


const renderComponent = ({ isRegistering, register }) => {
  if (isRegistering) {
    return <Loader text='Registering' />
  }

  return <RegisterInput register={register} />
}

const Register = props => (
  <CheckLoggedIn>
    {renderComponent(props)}
  </CheckLoggedIn>
)

const mapStateToProps = ({ register }) => ({
  isRegistering: register.isRegistering,
})

const mapDispatchToProps = {
  register,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
