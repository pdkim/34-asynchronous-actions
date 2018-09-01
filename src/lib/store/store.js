import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import thingReducer from '../../reducers/thing';
import {validate, logger} from '../../middleware/validation.js';

const appReducer = combineReducers({thingState: thingReducer});

export default createStore(appReducer, applyMiddleware(thunk, validate, logger));