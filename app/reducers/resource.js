import * as types from '../actions/actionTypes';

const initialState = {
  current: null,
  idx: null,
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
        list: action.payload,
      }
    }
    case types.SET_RESOURCE: {
      return {
        ...state,
        idx: action.payload.idx,  
        current: action.payload.resource
      }
    }
    default:
      return state;
  }
};