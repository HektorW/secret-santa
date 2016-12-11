import AdminContainer from './containers/AdminContainer'
import reducer from './modules/admin'
import { injectAsyncReducer } from '../../store/reducer.js'

export default store => ({
  path: '/admin',
  getComponent: (nextState, cb) => {
    injectAsyncReducer(store, { key: 'admin', reducer })
    cb(null, AdminContainer)
  },
})
