import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { fetchLoggedInUser } from '../routes/login/modules/login'

export default class AppContainer extends Component {
  componentWillMount() {
    this.props.store.dispatch(fetchLoggedInUser())
  }

  render() {
    const { history, routes, store } = this.props
    return (
      <Provider store={store}>
        <Router history={history} children={routes} />
      </Provider>
    )
  }
} 
