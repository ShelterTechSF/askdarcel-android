import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
  SEARCH_CATEGORY,
  SET_CATEGORY
} from './actionTypes';
import { API_URL } from '../config';

export function searchCategory(categoryId, categoryName) {
  return {
    type: SEARCH_CATEGORY,
    categoryId,
    categoryName
  };
};

export function fetchCategories() {
  return function(dispatch) {
    dispatch({type: FETCH_CATEGORIES});
    let url = API_URL + '/categories';
    fetch(url)
      .then((response) => response.json())
      .then((responseJ) => {
        dispatch({type: FETCH_CATEGORIES_FULFILLED, payload: responseJ})
      })
      .catch((err) => {
        dispatch({type: FETCH_CATEGORIES_REJECTED, payload: err})
      })
  };
};

export function setCategory(name, id) {
  return {
    type: SET_CATEGORY,
    payload: {name, id}
  };
};
