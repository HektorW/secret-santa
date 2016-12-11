import { get, post } from '../api'
import { LOGIN_USER, loginUser } from './user'


const initialState = {
  isLoggingIn: false,
  errorText: null,
}


const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'


export function login(username, password) {
  return async dispatch => {
    if (!username || !password) {
      return
    }

    dispatch({ type: LOGIN_REQUEST })

    const body = { username, password }
    let user
    try {
      user = await post('/auth/login', { body })
    } catch (error) {
      let errorText
      if (error.status === 401) {
        errorText = 'Det finns ingen användare med den här användarnamn/lösenords-kombinationen.'
      } else {
        errorText = 'Något gick snett :(, testa logga in igen.'
      }
      return dispatch({ type: LOGIN_FAILURE, errorText })
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
      return dispatch({ type: LOGIN_FAILURE })
    }

    dispatch(loginUser(user))
    dispatch({ type: LOGIN_SUCCESS })
  }
}


const ACTION_HANDLERS = {
  [LOGIN_USER]: state => ({ ...state, errorText: null }),
  [LOGIN_REQUEST]: state => ({ ...state, isLoggingIn: true, errorText: null }),
  [LOGIN_SUCCESS]: state => ({ ...state, isLoggingIn: false }),
  [LOGIN_FAILURE]: (state, { errorText }) => ({ ...state, isLoggingIn: false, errorText }),
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

