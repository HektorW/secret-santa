import * as api from '../api'


const initialState = {
  all: [],
  isUpdating: false,
  updateError: null,
}


const SET_INSPIRATIONS = 'SET_INSPIRATIONS'
const UPDATE_REQUEST = 'UPDATE_REQUEST'
const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
const UPDATE_FAILURE = 'UPDATE_FAILURE'


export function setInspirations(inspirations) {
  return { type: SET_INSPIRATIONS, inspirations }
}

export function addInspiration() {
  return inspirationAction('post', { value: 'empty' })
}

export function updateInspiration(id, value) {
  return inspirationAction('put', { id, value })
}

export function removeInspiration(id) {
  return inspirationAction('_delete', { id })
}


function inspirationAction(method, body) {
  return async dispatch => {
    dispatch({ type: UPDATE_REQUEST })

    let updatedInspirations
    try {
      updatedInspirations = await api[method]('/inspiration', { body })
    } catch (error) {
      return dispatch({ type: UPDATE_FAILURE, error })
    }

    dispatch({ type: UPDATE_SUCCESS })
    dispatch(setInspirations(updatedInspirations))
  }
}


const ACTION_HANDLERS = {
  [SET_INSPIRATIONS]: (state, { inspirations }) => ({ ...state, all: inspirations }),
  [UPDATE_REQUEST]: state => ({ ...state, isUpdating: true, updateError: null }),
  [UPDATE_SUCCESS]: state => ({ ...state, isUpdating: false }),
  [UPDATE_FAILURE]: (state, { error }) => ({ ...state, isUpdating: true, updateError: error }),
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

