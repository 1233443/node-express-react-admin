import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './home';
import zip from './zip';
import resgister from './resgister';
import login from './login';

const rootReducer = combineReducers({
  routing: routerReducer,
  home,
  zip,
  resgister,
  login
});

export default rootReducer;
