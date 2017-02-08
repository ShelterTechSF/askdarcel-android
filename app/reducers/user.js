import {
  GET_USER_LOCATION,
  GET_USER_LOCATION_FULFILLED,
  GET_USER_LOCATION_ERROR
} from '../actions/actionTypes';

const initialState = {
  fetching: false,
  location: null,
  error: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_USER_LOCATION:
      return {...state, fetching: true}
    case GET_USER_LOCATION_FULFILLED:
      return {...state, location: action.payload, fetching: false}
    case GET_USER_LOCATION_ERROR: 
      return {...state, error: action.payload, fetching: false}
    default:
      return state;
  }
};
