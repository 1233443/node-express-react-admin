import {send} from "./BasicServer";

export const addResgister = (data) => {
	var api = `/user/register`;
	return send(api, data, "POST");
}
export default {
	addResgister
}