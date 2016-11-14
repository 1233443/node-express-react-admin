import { createReducer } from 'redux-act-reducer';
import {ADDLOGIN} from '../actions/login';

const defaultState = {
  isFetching: false,
  data:undefined
};

const login = createReducer({
  [ADDLOGIN](state, action) {
    return {
      'REQUEST'() {
        return {
          isFetching: true
        };
      },
      'SUCCESS'() {
        return {
          isFetching: false,
          data:action.res
        };
      },
      'FAILURE'() {
        return {
          isFetching: false
        };
      }
    };
  }
}, defaultState);

export default login;
