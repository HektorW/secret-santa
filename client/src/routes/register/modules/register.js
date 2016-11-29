import { post } from '../../../api'
import { loginUser } from '../../../modules/user'


const initialState = {
  isRegistering: false,
  registerError: null,
}


const REGISTER_REQUEST = 'REGISTER_REQUEST'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAILURE = 'REGISTER_FAILURE'


export function register(realName, username, password) {
  return async dispatch => {
    dispatch({ type: REGISTER_REQUEST })

    const body = { realName, username, password }
    let user
    try {
      user = await post('/auth/register', { body })
    } catch (error) {
      return dispatch({ type: REGISTER_FAILURE, error })
    }

    dispatch({ type: REGISTER_SUCCESS })
    dispatch(loginUser(user))
  }
}


const ACTION_HANDLERS = {
  [REGISTER_REQUEST]: state => ({ ...state, isRegistering: true, registerError: null }),
  [REGISTER_SUCCESS]: state => ({ ...state, isRegistering: false }),
  [REGISTER_FAILURE]: (state, { error }) => ({ ...state, isRegistering: false, registerError: error }),
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
