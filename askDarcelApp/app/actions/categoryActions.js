import * as types from './actionTypes';

export function searchCategory(categoryId, categoryName) {
  return {
    type: types.SEARCH_CATEGORY,
    categoryId,
    categoryName
  };
};