import { post } from '../api'
import { loginUser } from './user'


const initialState = {
  isRegistering: false,
  errorText: null,
}


const REGISTER_REQUEST = 'REGISTER_REQUEST'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAILURE = 'REGISTER_FAILURE'


export function register(realname, username, password) {
  return async dispatch => {
    if (!realname || !username || !password) {
      return
    }

    dispatch({ type: REGISTER_REQUEST })

    const body = { realname, username, password }
    let user
    try {
      user = await post('/auth/register', { body })
    } catch (error) {
      let errorText
      if (error.data.alreadyExists) {
        errorText = 'Det finns redan en användare med det användarnamnet.'
      } else {
        errorText = 'Något gick snett :(, testa registrera igen.'
      }
      return dispatch({ type: REGISTER_FAILURE, errorText })
    }

    dispatch({ type: REGISTER_SUCCESS })
    dispatch(loginUser(user))
  }
}


const ACTION_HANDLERS = {
  [REGISTER_REQUEST]: state => ({ ...state, isRegistering: true, errorText: null }),
  [REGISTER_SUCCESS]: state => ({ ...state, isRegistering: false }),
  [REGISTER_FAILURE]: (state, { errorText }) => ({ ...state, isRegistering: false, errorText }),
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
