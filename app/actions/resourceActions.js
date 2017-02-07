import {
  FETCH_RESOURCES,
  FETCH_RESOURCES_FULFILLED,
  FETCH_RESOURCES_REJECTED,
  SET_RESOURCE
} from './actionTypes';
import config from '../config/config';

export function fetchResources(categoryId) {
  return function(dispatch) {
    dispatch({type: FETCH_RESOURCES});
    fetch(config.API_URL + "/resources?category_id="+categoryId)
      .then((response) => response.json())
      .then((response) => {
        dispatch({type: FETCH_RESOURCES_FULFILLED, payload: response.resources})
      })
      .catch((err) => {
        dispatch({type: FETCH_RESOURCES_REJECTED, payload: err})
      })
  }
};

export function setResource(resource, idx) {
  return {
    type: SET_RESOURCE,
    payload: {resource, idx}
  }
}
