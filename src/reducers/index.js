import { combineReducers } from 'redux';

import auth from './auth';
import compile from './compile';
import courses from './courses';

export const reducers = combineReducers({ auth, compile, courses });
