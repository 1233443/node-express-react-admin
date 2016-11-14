import {createAction,createActionAsync} from 'redux-act-reducer';
import request from 'hahoorequest/lib/fetch';

import ResgisterServer from "../serverApi/ResgisterServer";

export const ADDRESGISTER="ADDRESGISTER";

export const addResgisterApi = (data) => {
	const result = new Promise((resolve) => {
		var result=ResgisterServer.addResgister(data);
		result.then(function(data){
			resolve(data);
		})
	});
	return result;
}
export const addResgister = createActionAsync(ADDRESGISTER,addResgisterApi);