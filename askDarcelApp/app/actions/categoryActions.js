import * as types from './actionTypes';
import store from '../config/store';

export function searchCategory(categoryId, categoryName) {
  return {
    type: types.SEARCH_CATEGORY,
    categoryId,
    categoryName
  };
};

// need an async call to api here
function requestCategories() {
  return {
    type: types.REQUEST_CATEGORIES,
    isFetching: true
  }
};

function receiveCategories(categories) {
  let list = JSON.parse(categories);
  console.log(list[1]);
  return {
    type: types.RECEIVE_CATEGORIES,
    list,
    receivedAt: Date.now(),
    isFetching: false
  }
}

export function fetchCategories() {
  requestCategories();
  fetch('http://staging.askdarcel.org/api/categories')
  .then((response) => response.text())
  .then((responseText) => {
    console.log('THE TEXT PASSED TO RECIEVE CATS',responseText);
    store.dispatch(receiveCategories(responseText));
  })
  .catch((error) => {
    console.warn(error);
  });
}
