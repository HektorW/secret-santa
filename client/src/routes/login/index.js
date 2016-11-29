import Login from './containers/Login'
import reducer  from './modules/login'
import { injectAsyncReducer } from '../../store/reducer.js'

export default store => ({
  path: 'login',
  getComponent: (nextState, cb) => {
    injectAsyncReducer(store, { key: 'login', reducer })
    cb(null, Login)
  }
})
