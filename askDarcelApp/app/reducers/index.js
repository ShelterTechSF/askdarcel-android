import { combineReducers } from "redux";

import category from './category';
import resource from './resource';

export default combineReducers({
  category,
  resource
});