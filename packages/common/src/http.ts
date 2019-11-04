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
    let future = xhr.send(config.data);
    return future.get();
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
