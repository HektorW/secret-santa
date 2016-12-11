import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import AssignedView from '../components/AssignedView'
import Present from '../components/Present'

class AssignedContainer extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    assigned: PropTypes.object.isRequired,
  }

  state = {
    hasSeenReveal: false,
  }

  componentWillMount() {
    const { username } = this.props
    const hasSeenReveal = /true/i.test(window.localStorage.getItem(`${username}.hasSeenReveal`))
    this.setState({ hasSeenReveal })
  }

  onRevealDone() {
    const { username } = this.props
    window.localStorage.setItem(`${username}.hasSeenReveal`, 'true')
    this.setState({ hasSeenReveal: true })
  }

  resetRevealState() {
    this.setState({ hasSeenReveal: false })
  }

  render() {
    const { hasSeenReveal } = this.state
    const { assigned } = this.props

    if (!hasSeenReveal) {
      return <Present name={assigned.realname} onDone={() => this.onRevealDone()} />
    }

    return <AssignedView assigned={assigned} resetRevealState={() => this.resetRevealState()} />
  }
}


const mapStateToProps = ({ user }) => ({
  username: user.username,
  assigned: user.assigned,
})

export default connect(mapStateToProps)(AssignedContainer)
