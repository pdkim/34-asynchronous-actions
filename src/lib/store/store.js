import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import thingReducer from '../../reducers/thing';

const appReducer = combineReducers({thingState: thingReducer});

export default createStore(appReducer, applyMiddleware(thunk));