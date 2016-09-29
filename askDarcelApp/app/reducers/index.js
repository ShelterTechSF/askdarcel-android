import { combineReducers } from "redux";

import category from './category';
import resource from './resource';
import user from './user';

export default combineReducers({
  category,
  resource,
  user
});