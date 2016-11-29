import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import modules from '../modules'

export default function makeRootReducer(asyncReducers = {}) {
  return combineReducers({
    routing,
    ...modules,
    ...asyncReducers,
  })
}

export function injectAsyncReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}
