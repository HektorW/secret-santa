import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../modules/user'
import './logout.css'

const Logout = ({ logout }) => (
  <a className='link logout' onClick={logout}><span className='icon-arrow_back' />Logga ut</a>
)

const mapDispatchToProps = {
  logout,
}

export default connect(null, mapDispatchToProps)(Logout)
