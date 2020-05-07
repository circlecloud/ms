const URL = Java.type('java.net.URL')
const Paths = Java.type('java.nio.file.Paths');
const Files = Java.type('java.nio.file.Files');
const StandardCopyOption = Java.type('java.nio.file.StandardCopyOption');

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
    xhr.send(typeof config.data === "string" ? config.data : JSON.stringify(config.data));
    if ((xhr.getResponseHeader("Content-Type") + '').indexOf('application/json') != -1) {
        xhr.responseType = "json"
    }
    return xhr.get();
}

function download(url: string, target: string) {
    console.debug(`Start Download file ${target} from ${url}....`)
    Files.copy(new URL(url).openStream(), Paths.get(target), StandardCopyOption.REPLACE_EXISTING);
    console.debug(`File ${target} Download Complate...`)
}

function _proxy(method: Method) {
    return function (url: string, data?: any, config?: RequestConfig) {
        return request({ url, method, data, ...config });
    }
}

export default {
    get: _proxy('GET'),
    post: _proxy('POST'),
    request,
    download
}
