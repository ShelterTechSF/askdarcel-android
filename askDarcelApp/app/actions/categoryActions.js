import * as types from './actionTypes';

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

function receiveCategories(response) {
  console.log(response);
  return {
    type: types.RECEIVE_CATEGORIES,
    categories: [],
    receivedAt: Date.now()
  }
}

export function fetchCategories() {
  fetch('http://localhost:3000/categories')
  .then((response) => response.text())
  .then((responseText) => {
    console.log(responseText);
  })
  .catch((error) => {
    console.warn(error);
  });
}
