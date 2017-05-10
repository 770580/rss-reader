import { combineReducers } from 'redux';
import feeds from './feeds';
import itemsList from './itemsList';

export default combineReducers({
  feeds,
  itemsList
});
