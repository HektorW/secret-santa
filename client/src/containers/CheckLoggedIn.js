import React, { Component } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

class CheckLoggedIn extends Component {
  componentWillMount() {
    this.checkLoggedIn(this.props)
  }

  componentWillReceiveProps(props) {
    this.checkLoggedIn(props)
  }

  checkLoggedIn(props) {
    const { isLoggedIn, navigateToRoot } = props
    if (isLoggedIn) {
      navigateToRoot()
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}


const mapStateToProps = ({ user, register }) => ({
  isLoggedIn: user.isLoggedIn,
})

const mapDispatchToProps = {
  navigateToRoot: replace.bind(null, '/'),
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckLoggedIn)
