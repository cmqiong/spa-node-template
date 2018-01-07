import {Request} from '@types/express';
import axios from 'axios';
import appConfig from '../config/app.config';
// let instanceAxios:any = axios.create();

// instanceAxios.defaults.baseURL = appConfig.baseURL;
/*axios.interceptors.response.use(function (response) {
 console.log('------ instanceAxios ---- response----');
 console.log(response);

 return response;
 }, function (error) {
 if (error.response.status === 401) {
 throw error;
 }
 return Promise.reject(error);
 });*/

function generatorUrl(url: string, data: any = {}) {
  if (JSON.stringify(data) == '{}') return url;
  let queryArr = [];
  for (let i in data) {
    queryArr.push(`${i}=${data[i]}`)
  }
  return `${url}?${queryArr.join('&')}`
}

function ajax(req: Request, options: any = {}) {
  const method = options.method || 'get';
  const data = options.data || {};
  const url = method == 'get' ? generatorUrl(options.url, data) : options.url;
  const headers = options.headers || {};
 // TODO: 第一次请求值为 undefined，需要处理
  console.log('-----------req.headers-------------')
  console.log(req.headers);
  // headers.Authorization = req.headers['Authorization'] || options.headers['Authorization'];
  headers.Authorization = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzeXN0ZW1faWQiOiJzdW5iYXIiLCJzY29wZSI6WyJvcGVuaWQiLCJ3cml0ZSIsInJlYWQiLCJzb3BfYmFzZSIsInNvcF91c2hvcCIsInNvcF9zdW5iYXIiLCJzb3BfdWFjIiwic29wX2FjY291bnQiLCJzb3BfcHVzaCIsInNvcF9zdW5iYXJfbWVyY2hhbnQiLCJzb3Bfc3VuYmFyX3dlY2hhdCIsInNvcF9zdW5iYXJfZnVuY3Rpb25hbF9tb2R1bGVzIiwiYmV0LWdhbWUiLCJzb3BfcGF5Iiwic29wX3NtcyIsImhpLWxpdmUiLCJzdW5iYXItYmFyIiwic29wX3N1bmJhcl9tZXNzYWdlX3Vwc3RyZWFtIiwic3VuYmFyLXdlY2hhdC1hcGkiXSwiZXhwIjoxNTE1MzY5OTEzLCJhdXRob3JpdGllcyI6WyJST0xFX1RSVVNURURfQ0xJRU5UIl0sImp0aSI6IjAyZThlZjJkLWQ2ODAtNDU0My05Yzc2LTdlNWNmNGRmM2FmYiIsImNsaWVudF9pZCI6InN1bmJhcl9tZXJjaGFudCJ9.LcQgOG7z6uCPJbjH2J1QjfosFJ-hcPvxb5qutsyiv_AR70LRxtwlNRdpIYqMq-hkii4Nb0Hdp7F61GRT0Sel1CuYgK6FbAQZJENo7SAHXlNKQUjzPt9em6wjw_etXDb8ByLjkuFB5B4ou28ifX4bBXZAsMvhAzRaQ7vFxhhtqJEgY2kXHJMDHi4_Tfz5oZYdbvO2GWMokkQwmvHoFCmkfcTPvLi_cT7J_mkZWFBWWlo19elkJvnPiQfrwpG5_7cYh_mCWTpdQnsp9EguXOqHioIpGIfMXFNOrv0KAINPguSxZet0hLKn0MQc4Kho27rzeg60vSDS1lnqyDrp6619yg'
  const httpObj = {
    url,
    method,
    baseURL: appConfig.baseURL,
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
    data: {
      type:'SINGER'
    },
    headers,
  }

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
  const headers = Object.assign({
      'Content-Type': contentType[type]
  }, options.headers || {});

  const data = options.data || {};

  return ajax(req, {
    url: url,
    method: 'post',
    data: type == 'json' ? JSON.stringify(data) : data,
    // data,
    headers: headers || {},
  })
}
