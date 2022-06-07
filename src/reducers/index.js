import { combineReducers } from 'redux';

import authData from './auth';
import compile from './compile';
import courses from './courses';
import labs from './labs';

export const reducers = combineReducers({ authData, compile, courses, labs });
