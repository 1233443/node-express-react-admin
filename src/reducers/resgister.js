import { createReducer } from 'redux-act-reducer';
import {ADDRESGISTER} from '../actions/resgister';

const defaultState = {
  isFetching: false,
  data:undefined
};

const resgister = createReducer({
  [ADDRESGISTER](state, action) {
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

export default resgister;
