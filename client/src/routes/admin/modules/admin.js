import { get, post } from '../../../api'

const initialState = {
  allUsers: [],
  hasAssignedUsers: false,
  error: null,
}


const USERS_FETCHED = 'ADMIN_USERS_FETCHED'
const USERS_ASSIGNED = 'ADMIN_USERS_ASSIGNED'
const ERROR = 'ADMIN_ERROR'


export function fetchAllUsers() {
  return async dispatch => {
    let users
    try {
      users = await get('/admin/users')
    } catch (error) {
      return dispatch({ type: ERROR, error })
    }

    dispatch({ type: USERS_FETCHED, users })
  }
}

export function assignUsers(selectedUserIds) {
  return async dispatch => {
    const body = { users: selectedUserIds }
    try {
      await post('/admin/assign', { body })
    } catch (error) {
      return dispatch({ type: ERROR, error })
    }

    dispatch({ type: USERS_ASSIGNED })
  }
}


const ACTION_HANDLERS = {
  [USERS_FETCHED]: (state, { users }) => ({ ...state, allUsers: users }),
  [USERS_ASSIGNED]: state => ({ ...state, hasAssignedUsers: true }),
  [ERROR]: (state, { error }) => ({ ...state, error }),
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

