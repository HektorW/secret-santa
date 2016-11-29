import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import makeRootReducer from './reducer'


export default function createApplicationStore(initialState = {}) {
  const rootReducer = makeRootReducer()
  const composeEnhancers =
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  
  const middleware = [
    thunk,
    routerMiddleware(browserHistory),
  ]

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )

  store.asyncReducers = {}
  
  return store
}
