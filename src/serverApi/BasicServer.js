require('es6-promise').polyfill();
import {Promise} from 'es6-promise';
import fetch from 'isomorphic-fetch'
import config from '../config';

let params = function (data) {
    var temp = [];
    for (var key in data) {
        temp.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return temp.join('&');
};

export function send(api, data, method = 'POST') {
	//application/x-www-form-urlencoded;charset=UTF-8
	//multipart/form-data主要就是我们上传的非文本的内容，
	//　text/plain是纯文本传输的意思，在发邮件的时候要设置这种编码类型
    var option = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    };
    /*if (getCookie(`${projectName}Token`))
     option.headers['Authorization'] = "Bearer " + getCookie(`${projectName}Token`);*/
    //option.headers['Authorization'] = "Bearer " + token;
	console.log(config.urlHost);
    if (data){
    	if(typeof data=="string"){
        	option.body = data;
    	}else{	
        	option.body = params(data);
    	}
	}
    return new Promise((resolve, reject)=> {
        fetch(config.urlHost + api, option)
            .then(response=> {
                response.json().then(function (json) {
                    if (response.status >= 200 && response.status < 300) {
                        resolve(json);
                    } else {
                        reject(json);
                    }
                })
            })
            .catch(error => {
                reject(error);
                console.log(error)
                console.error(`errorApi:${host + api}`);
            });
    });

}