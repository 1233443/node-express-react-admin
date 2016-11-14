import {send} from "./BasicServer";

export const getList = (url) => {
	var api = `/dog/list`;
	return send(api, null, 'GET');
}
export const addZip = (data) => {
	var api = `/dog/add`;
	return send(api, data, "POST");
}
export const deleteZip=(id)=>{
	var api="/dog/delete/"+id;
	return send(api, {}, "POST");
}
export default {
	getList,
	addZip,
	deleteZip
}