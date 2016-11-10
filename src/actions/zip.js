import {createAction,createActionAsync} from 'redux-act-reducer';
import request from 'hahoorequest/lib/fetch';

import ZipServer from "../serverApi/ZipServer";


export const LISTZIP="LISTZIP"
export const ADDZIP="ADDZIP";

const listZipApi = (url) => {
	const result = new Promise((resolve) => {
		var result=ZipServer.getList();
		result.then(function(data){
			resolve(data);
		})
	});
	return result;
}

export const addZipAsync=(data)=>{
	const result=new Promise((resolve)=>{
		var promise=ZipServer.addZip(data);
		promise.then(function(data){
			resolve(data);
		});
	});
	return result;
}

export const listZipAsync = createActionAsync(LISTZIP,listZipApi);