import {
  FETCH_RESOURCES,
  FETCH_RESOURCES_FULFILLED,
  FETCH_RESOURCES_REJECTED,
  SET_RESOURCE
} from '../actions/actionTypes';

const initialState = {
  current: null,
  list: [],
  fetching: false,
  receivedAt: null,
  error: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_RESOURCES:
      return {...state, fetching: true}
    case FETCH_RESOURCES_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case FETCH_RESOURCES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        recievedAt: new Date,
        list: action.payload,
      }
    }
    case SET_RESOURCE: {
      return {
        ...state,  
        current: action.payload
      }
    }
    default:
      return state;
  }
};