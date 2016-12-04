import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { fetchLoggedInUser } from '../modules/login'
import Snowfall from '../components/Snowfall'

export default class AppContainer extends Component {
  componentWillMount() {
    this.props.store.dispatch(fetchLoggedInUser())
  }

  render() {
    const { history, routes, store } = this.props
    return (
      <Provider store={store}>
        <main>
          <Snowfall />
          <Router history={history} children={routes} />    
        </main>
      </Provider>
    )
  }
} 
