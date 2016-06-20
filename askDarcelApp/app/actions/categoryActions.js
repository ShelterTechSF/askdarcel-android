import * as types from './actionTypes';

export function searchCategory(categoryId, categoryName) {
  return {
    type: types.SEARCH_CATEGORY,
    categoryId,
    categoryName
  };
};

// need an async call to api here
export function loadCategories() {
  return {
    type: types.LOAD_CATEGORIES,
    categories: []
  }
};