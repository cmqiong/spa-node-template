import {Request} from '@types/express';
import axios from 'axios';
import appConfig from '../config/app.config';
import {isNullOrUndefined} from "util";

// let instanceAxios:any = axios.create();

// instanceAxios.defaults.baseURL = appConfig.baseURL;
// axios.interceptors.response.use(function (response) {
//     console.log('------ instanceAxios ---- response----');
//     console.log(response);
//     return response;
// }, function (error) {
//     if (error.response.status === 401) {
//         throw error;
//     }
//     return Promise.reject(error);
// });

function generatorUrl(url: string, data: any = {}) {
    if (JSON.stringify(data) == '{}') return url;
    let queryArr = [];
    for (let i in data) {
        queryArr.push(`${i}=${data[i]}`)
    }
    return `${url}?${queryArr.join('&')}`
}

function transformRequest(data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}

function ajax(req: Request, options: any = {}) {
    const method = options.method || 'get';
    const data = options.data || {};
    const url = method == 'get' ? generatorUrl(options.url, data) : options.url;
    const headers = Object.assign(req.headers, options.headers);
    // if (!isNullOrUndefined(options.headers['Authorization'])) {
    //     headers['Authorization'] = options.headers['Authorization']
    // }
    const httpObj = {
        url,
        method,
        baseURL: appConfig.baseURL,
        data,
        headers,
    };

    console.log('------ httpObj ------');
    console.log(httpObj);

    return axios(httpObj).then(function (resData) {
        console.log('------ axioscb ---- response ----');
        return resData;
    }, function (resErr) {
        console.log('------ axioscb ---- resErr ----');
        console.log(resErr);
        return resErr;
    });
}

export function get(req: Request, url: string, options: any = {}) {
    return ajax(req, {
        url: url,
        data: options.data || {},
        headers: options.headers || {},
    })
}

export function post(req: Request, url: string, options: any = {}, type?: string) {
    type = type || 'form';
    const contentType = {
        'form': 'application/x-www-form-urlencoded',
        'data': 'application/form-data',
        'json': 'application/json;charset=UTF-8'
    };
    const headers = Object.assign(options.headers, {
        'Content-Type': contentType[type]
    });

    const data = options.data || {};

    return ajax(req, {
        url: url,
        method: 'post',
        data: type == 'form' ? transformRequest(data) : data,
        headers: headers || {},
    })
}

export function deleteAjax(req: Request, url: string, options: any = {}) {
    return ajax(req, {
        url: url,
        method: 'delete',
        data: options.data || {},
        headers: options.headers || {},
    })
}

export function patch(req: Request, url: string, options: any = {}) {
    return ajax(req, {
        url: url,
        method: 'patch',
        data: options.data || {},
        headers: options.headers || {},
    })
}

export function put(req: Request, url: string, options: any = {}) {
    return ajax(req, {
        url: url,
        method: 'put',
        data: options.data || {},
        headers: options.headers || {},
    })
}
