import { combineReducers } from 'redux';

import auth from './auth';
import compile from './compile'

export const reducers = combineReducers({ auth, compile });
