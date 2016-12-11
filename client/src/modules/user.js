import { replace } from 'react-router-redux'
import { post } from '../api'
import { setInspirations } from './inspirations'


const initialState = {
  username: '',
  realname: '',
  assigned: null,
  isLoggedIn: false,
}


export const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'


export function loginUser(user) {
  return dispatch => {
    dispatch({ type: LOGIN_USER, user })
    dispatch(setInspirations(user.inspirations))
  }
}

export function logout() {
  return dispatch => {
    post('/auth/logout')
    dispatch({ type: LOGOUT_USER })
    dispatch(replace('/'))
  }
}


const ACTION_HANDLERS = {
  [LOGIN_USER]: (state, { user }) => ({
    ...state,
    isLoggedIn: true,
    username: user.username,
    realname: user.realname,
    assigned: user.assigned,
  }),
  [LOGOUT_USER]: state => ({ ...state, isLoggedIn: false, username: '', realname: '', assigned: null }),
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

