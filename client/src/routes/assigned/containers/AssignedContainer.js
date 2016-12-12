import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import PageTransitions from '../../../components/PageTransitions'
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

    return (
      <PageTransitions location={{ pathname: hasSeenReveal ? 'assigned' : 'present' }}>
        {hasSeenReveal
          ? <AssignedView assigned={assigned} resetRevealState={() => this.resetRevealState()} /> 
          : <Present name={assigned.realname} onDone={() => this.onRevealDone()} />
        }
      </PageTransitions>
    )
  }
}


const mapStateToProps = ({ user }) => ({
  username: user.username,
  assigned: user.assigned,
})

export default connect(mapStateToProps)(AssignedContainer)
