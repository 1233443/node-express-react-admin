import { createReducer } from 'redux-act-reducer';
import {LISTZIP} from '../actions/zip';

const defaultState = {
  isFetching: false,
  data:undefined
};

const zip = createReducer({
  [LISTZIP](state, action) {
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

export default zip;
