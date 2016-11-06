import * as types from './actionTypes';
import config from '../config/config';

export function searchCategory(categoryId, categoryName) {
  return {
    type: types.SEARCH_CATEGORY,
    categoryId,
    categoryName
  };
};

export function fetchCategories() {
  return function(dispatch) {
    dispatch({type: types.FETCH_CATEGORIES});
    let url = config.API_URL + '/categories';
    fetch(url)
      .then((response) => response.json())
      .then((responseJ) => {
        dispatch({type: types.FETCH_CATEGORIES_FULFILLED, payload: responseJ})
      })
      .catch((err) => {
        dispatch({type: types.FETCH_CATEGORIES_REJECTED, payload: err})
      })
  }
};

export function setCategory(name, id) {
  return {
    type: types.SET_CATEGORY,
    payload: {name, id}
  }
}
