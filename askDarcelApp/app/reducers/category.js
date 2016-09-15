import * as types from '../actions/actionTypes';

const initialState = {
  id: null,
  name: null,
  list: [],
  fetching: false,
  receivedAt: null,
  error: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case types.FETCH_CATEGORIES:
      return {...state, fetching: true}
    case types.FETCH_CATEGORIES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        recievedAt: new Date,
        list: action.payload, 
      }
    }
    case types.FETCH_CATEGORIES_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    default:
      return state;
  }
};