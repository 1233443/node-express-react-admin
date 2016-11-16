import {send} from "./BasicServer";


export const loginIn = (data) => {
	var api = `/admin/user/loginIn`;
	return send(api, data, "POST");
}
export default {
	loginIn
}