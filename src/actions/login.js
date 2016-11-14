import {createAction,createActionAsync} from 'redux-act-reducer';
import request from 'hahoorequest/lib/fetch';

import LoginServer from "../serverApi/LoginServer";

export const ADDLOGIN="ADDLOGIN";

export const loginInApi = (data) => {
	const result = new Promise((resolve) => {
		var result=LoginServer.loginIn(data);
		result.then(function(data){
			resolve(data);
		})
	});
	return result;
}
export const loginIn = createActionAsync(ADDLOGIN,loginInApi);