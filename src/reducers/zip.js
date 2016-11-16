import { createReducer } from 'redux-act-reducer';
import {LISTZIP,DETAILZIP} from '../actions/zip';
const defaultState = {
	isFetching:false,
	isDetailFetching:false,
	list:{},
};
const zip = createReducer({
	[LISTZIP](state, action) {
		return {
			'REQUEST' () {
				return {
					isFetching: true
				};
			},
			'SUCCESS' () {
				return {
					isFetching: false,
					data: action.res
				};
			},
			'FAILURE' () {
				return {
					isFetching: false
				};
			}
		};
	},
	[DETAILZIP](state, action) {
		return {
			'REQUEST' () {
				return {
					isDetailFetching: true
				};
			},
			'SUCCESS' () {
				return {
					isDetailFetching: false,
					detail: action.res
				};
			},
			'FAILURE' () {
				return {
					isDetailFetching: false
				};
			}
		};
	}
}, defaultState);

export default zip;