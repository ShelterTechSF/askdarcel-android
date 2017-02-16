import {
  FETCH_RESOURCES,
  FETCH_RESOURCES_FULFILLED,
  FETCH_RESOURCES_REJECTED,
  SET_RESOURCE
} from './actionTypes';
import { API_URL } from '../config';

export function fetchResources(categoryId) {
  return function(dispatch) {
    console.warn("Fetching the resources for " + categoryId);
    dispatch({type: FETCH_RESOURCES});
    fetch(API_URL + "/resources?category_id="+categoryId)
      .then((response) => response.json())
      .then((response) => {
        dispatch({type: FETCH_RESOURCES_FULFILLED, payload: response.resources})
      })
      .catch((err) => {
        dispatch({type: FETCH_RESOURCES_REJECTED, payload: err})
      })
  };
};

export function setResource(resource) {
  return {
    type: SET_RESOURCE,
    payload: resource
  };
};
