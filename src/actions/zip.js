import {createAction,createActionAsync} from 'redux-act-reducer';
import request from 'hahoorequest/lib/fetch';

import ZipServer from "../serverApi/ZipServer";


export const LISTZIP="LISTZIP"
export const ADDZIP="ADDZIP";
export const DETAILZIP="DETAILZIP";


export const addZipAsync=(data)=>{
	const result=new Promise((resolve)=>{
		var promise=ZipServer.addZip(data);
		promise.then(function(data){
			resolve(data);
		});
	});
	return result;
}
export const deleteApiAsync=(id)=>{
	const result=new Promise((resolve)=>{
		var promise=ZipServer.deleteZip(id);
		promise.then(function(data){
			resolve(data);
		});
	});
	return result;
}
export const updataZipApi=(data)=>{
	const result=new Promise((resolve)=>{
		var promise=ZipServer.updataZip(data);
		promise.then(function(data){
			resolve(data);
		});
	});
	return result;
}

const listZipApi = () => {
	const result = new Promise((resolve) => {
		var result=ZipServer.getList();
		result.then(function(data){
			resolve(data);
		})
	});
	return result;
}
const detailZipApi = (data) => {
	const result = new Promise((resolve) => {
		var result=ZipServer.detailZip(data);
		result.then(function(data){
			resolve(data);
		})
	});
	return result;
}
export const listZipAsync = createActionAsync(LISTZIP,listZipApi);
export const detailZipAsync = createActionAsync(DETAILZIP,detailZipApi);