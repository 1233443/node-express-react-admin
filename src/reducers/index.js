import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './home';
import zip from './zip';

const rootReducer = combineReducers({
  routing: routerReducer,
  home,
  zip
});

export default rootReducer;
