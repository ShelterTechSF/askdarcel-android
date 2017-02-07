import {
  GET_USER_LOCATION,
  GET_USER_LOCATION_FULFILLED,
  GET_USER_LOCATION_ERROR,
  UPDATE_USER_LOCATION
} from './actionTypes';

export function getUserLocation() {
  return function(dispatch) {
    dispatch({type: GET_USER_LOCATION});
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({type: GET_USER_LOCATION_FULFILLED, payload: position});
      },
      (error) =>{
        dispatch({type: GET_USER_LOCATION_ERROR, payload: error});
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}

export function updateUserLocation(location) {
  return {
    type: UPDATE_USER_LOCATION,
    payload: location
  }
}
