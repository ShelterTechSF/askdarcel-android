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
    default:
      return state
  }
};