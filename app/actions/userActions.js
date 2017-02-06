import * as types from './actionTypes';

export function getUserLocation() {
  return function(dispatch) {
    dispatch({type: types.GET_USER_LOCATION});
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({type: types.GET_USER_LOCATION_FULFILLED, payload: position});
      },
      (error) =>{
        dispatch({type: types.GET_USER_LOCATION_ERROR, payload: error});
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}

export function updateUserLocation(location) {
  return {
    type: types.UPDATE_USER_LOCATION,
    payload: location
  }
}
