import { combineReducers } from 'redux';

import auth from './auth';
import compile from './compile';
import courses from './courses';
import labs from './labs';

export const reducers = combineReducers({ auth, compile, courses, labs });
