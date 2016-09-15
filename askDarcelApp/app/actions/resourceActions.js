import * as types from './actionTypes';

export function fetchResources(categoryId) {
  return function(dispatch) {
    fetch("http://localhost:3000/api/resources?category_id="+categoryId)
      .then((response) => response.json())
      .then((response) => {
        dispatch({type: types.FETCH_RESOURCES_FULFILLED, payload: response.data})
      })
      .catch((err) => {
        dispatch({type: types.FETCH_RESOURCES_REJECTED, payload: err})
      })
  }
};

export function setResource(name, id) {
  return {
    type: types.SET_RESOURCE,
    payload: {name: name, id: id}
  }
}