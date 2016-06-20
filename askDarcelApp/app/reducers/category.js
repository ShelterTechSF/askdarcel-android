import * as types from '../actions/actionTypes';

const initialState = {
  categoryId: 1,
  categoryName: "Shelter"
};

export default function searchCategory(state = initialState, action = {}) {

  switch(action.type) {
    case types.SEARCH_CATEGORY:
      return Object.assign({}, state, {
        categoryId: action.categoryId,
        categoryName: action.categoryName
      })
    case type.LOAD_CATEGORIES:
      return Object.assign({}, state, {
        categories: [{id: 1, name: "Shelter"}, {id: 2, name: "Food"}]
      })
    default:
      return state
  }
};