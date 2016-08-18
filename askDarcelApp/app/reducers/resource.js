import * as types from '../actions/actionTypes';

const initialState = {
  id: null,
  name: null,
  current: null,
  currentId: null,
  list: [],
  fetching: false,
  receivedAt: null,
  error: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case types.FETCH_RESOURCES:
      return {...state, fetching: true}
    case types.FETCH_RESOURCES_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.FETCH_RESOURCES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        recievedAt: new Date,
        user: action.payload,
      }
    }
    default:
      return state;
  }
};