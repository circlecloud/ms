import '@ms/api'

export type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'

interface RequestConfig {
    url?: string;
    method?: Method;
    headers?: { [key: string]: string };
    params?: { [key: string]: string };
    data?: any;
}

function request(config: RequestConfig) {
    // @ts-ignore
    let xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url, false);
    for (const header in config.headers) {
        xhr.setRequestHeader(header, config.headers[header]);
    }
    xhr.send(config.data);
    if ((xhr.getResponseHeader("Content-Type") + '').indexOf('application/json') != -1) {
        xhr.responseType = "json"
    }
    return xhr.get();
}

function _proxy(method: Method) {
    return function(url: string, data?: any, config?: RequestConfig) {
        return request({ url, method, data, ...config });
    }
}

export default {
    get: _proxy('GET'),
    post: _proxy('POST'),
    request
}
