import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
  SET_CATEGORY
} from '../actions/actionTypes';

const initialState = {
  id: null,
  name: null,
  list: [],
  fetching: false,
  receivedAt: null,
  error: null
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_CATEGORIES:
      return {...state, fetching: true}
    case FETCH_CATEGORIES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        recievedAt: new Date,
        list: action.payload.categories, 
      }
    }
    case FETCH_CATEGORIES_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case SET_CATEGORY: {
      return {...state, id: action.payload.id, name: action.payload.name}
    }
    default:
      return state;
  }
};
