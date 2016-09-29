import * as types from './actionTypes';

export function fetchResources(categoryId) {
  return function(dispatch) {
    dispatch({type: types.FETCH_RESOURCES});
    fetch("http://192.168.1.66:3000/resources?category_id="+categoryId)
      .then((response) => response.json())
      .then((response) => {
        dispatch({type: types.FETCH_RESOURCES_FULFILLED, payload: response.resources})
      })
      .catch((err) => {
        dispatch({type: types.FETCH_RESOURCES_REJECTED, payload: err})
      })
  }
};

export function setResource(resource, idx) {
  return {
    type: types.SET_RESOURCE,
    payload: {resource, idx}
  }
}
