import reducer  from './modules/register'
import { injectAsyncReducer } from '../../store/reducer.js'
import Register from './containers/Register'

export default store => ({
  path: '/register',
  getComponent: (nextState, cb) => {
    injectAsyncReducer(store, { key: 'register', reducer })
    cb(null, Register)
  }
})
