import { combineReducers } from 'redux';
import { user } from './user.reducer';
import { language } from './language.reducer';

export const rootReducer = combineReducers({
  user,
  language,
});
