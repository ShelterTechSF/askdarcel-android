import * as types from './actionTypes';

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
    fetch("http://192.168.1.66:3000/categories")
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
