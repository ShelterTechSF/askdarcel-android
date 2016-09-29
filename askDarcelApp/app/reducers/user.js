import * as types from '../actions/actionTypes';

const initialState = {
  fetching: false,
  location: null,
  error: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case types.GET_USER_LOCATION:
      return {...state, fetching: true}
    case types.GET_USER_LOCATION_FULFILLED:
      return {...state, location: action.payload, fetching: false}
    case types.GET_USER_LOCATION_ERROR: 
      return {...state, error: action.payload, fetching: false}
    default:
      return state;
  }
}