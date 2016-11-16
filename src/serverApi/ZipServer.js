import {send} from "./BasicServer";


export const getList = () => {
	var api = `/admin/dog/list`;
	return send(api, null, 'GET');
}
export const addZip = (data) => {
	var api = `/admin/dog/add`;
	return send(api, data, "POST");
}
export const deleteZip = (id) => {
	var api = "/admin/dog/delete/" + id;
	return send(api, {}, "POST");
}
export const detailZip = (data) => {
	var api = `/admin/dog/detail`;
	return send(api, data, "POST");
}

export const updataZip=(data)=>{
	var api=`/admin/dog/updata`;
	return send(api, data, "POST");
}
export default {
	getList,
	addZip,
	deleteZip,
	detailZip,
	updataZip
}