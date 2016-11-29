import { get, post } from '../../../api'
import { loginUser } from '../../../modules/user'


const initialState = {
  isLoggingIn: false,
  loginError: null,
}


const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'


export function login(username, password) {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST })

    const body = { username, password }
    let user
    try {
      user = await post('/auth/login', { body })
    } catch (error) {
      return dispatch({ type: LOGIN_FAILURE, error })
    }

    dispatch({ type: LOGIN_SUCCESS })
    dispatch(loginUser(user))
  }
}

export function fetchLoggedInUser() {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST })

    let user
    try {
      user = await get('/auth/loggedInUser')
    } catch (error) {
      return dispatch({ type: LOGIN_FAILURE, error: null })
    }

    dispatch({ type: LOGIN_SUCCESS })
    dispatch(loginUser(user))
  }
}


const ACTION_HANDLERS = {
  [LOGIN_REQUEST]: state => ({ ...state, isLoggingIn: true, loginError: null }),
  [LOGIN_SUCCESS]: state => ({ ...state, isLoggingIn: false }),
  [LOGIN_FAILURE]: (state, { error }) => ({ ...state, isLoggingIn: false, loginError: error }),
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

