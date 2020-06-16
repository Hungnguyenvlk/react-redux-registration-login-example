import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { usersList } from './users-list.reducer'
import {userDetail} from './user-detail.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  usersList,
  userDetail,
  alert
});

export default rootReducer;