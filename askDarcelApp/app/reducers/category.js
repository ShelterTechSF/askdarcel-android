import * as types from '../actions/actionTypes';

const initialState = {
  categoryId: 1,
  categoryName: "Shelter",
  categories: {
    list: [],
    isFetching: false,
    receivedAt: null
  }
};

export default function searchCategories(state = initialState, action = {}) {

  switch(action.type) {
    case types.SEARCH_CATEGORY:
      return Object.assign({}, state, {
        categoryId: action.categoryId,
        categoryName: action.categoryName
      })
    case types.REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        categories: Object.assign({}, state.categories, {
          isFetching: action.isFetching
        })
      })
    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        categories: {
          list: action.list, 
          isFetching: action.isFetching,
          receivedAt: action.receivedAt
        }
      })
    default:
      return state
  }
};