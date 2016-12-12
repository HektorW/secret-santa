import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './page-transitions.css'

export default ({ children, location }) => (
  <ReactCSSTransitionGroup
    component='div'
    transitionName='page-transition'
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
  >
    {React.cloneElement(children, {
      key: location.pathname,
    })}
  </ReactCSSTransitionGroup>
)
