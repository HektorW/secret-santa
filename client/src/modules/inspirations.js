import { post } from '../api'


const initialState = {
  all: [],
  isUpdating: false,
  updateError: null,
}


const SET_INSPIRATIONS = 'SET_INSPIRATIONS'


export function setInspirations(inspirations) {
  return { type: SET_INSPIRATIONS, inspirations }
}


const ACTION_HANDLERS = {
  [SET_INSPIRATIONS]: (state, { inspirations }) => ({ ...state, all: inspirations })
}


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

