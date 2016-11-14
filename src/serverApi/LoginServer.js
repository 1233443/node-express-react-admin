import {send} from "./BasicServer";


export const loginIn = (data) => {
	var api = `/user/loginIn`;
	return send(api, data, "POST");
}
export default {
	loginIn
}