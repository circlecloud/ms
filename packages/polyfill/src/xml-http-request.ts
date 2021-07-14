import '@ccms/nashorn'

const URL = Java.type("java.net.URL")
const JavaString = Java.type("java.lang.String")
const SecureRandom = Java.type("java.security.SecureRandom")
const SSLContext = Java.type("javax.net.ssl.SSLContext")
const HttpsURLConnection = Java.type("javax.net.ssl.HttpsURLConnection")
const HostnameVerifier = Java.type("javax.net.ssl.HostnameVerifier")
const X509TrustManager = Java.type("javax.net.ssl.X509TrustManager")

const SocketTimeoutException = Java.type('java.net.SocketTimeoutException')

const Callable = Java.type('java.util.concurrent.Callable')
const TimeUnit = Java.type('java.util.concurrent.TimeUnit')
const Executors = Java.type('java.util.concurrent.Executors')

const ByteArrayOutputStream = Java.type("java.io.ByteArrayOutputStream")
const ByteArray = Java.type("byte[]")

const UTF_8 = "UTF-8"

const TrustAnyHostnameVerifier = new HostnameVerifier({ verify: () => true })

const SSLSocketFactory = function initSSLSocketFactory() {
    let sslContext = SSLContext.getInstance("TLS")
    sslContext.init(null, [new X509TrustManager({
        getAcceptedIssuers: () => null,
        checkClientTrusted: () => { },
        checkServerTrusted: () => { }
    })], new SecureRandom())
    return sslContext.getSocketFactory()
}()

interface Future<T> {
    cancel(): boolean
    isCancelled(): boolean
    isDone(): boolean
    get(): T
}

enum ReadyState {
    UNSENT,//Client has been created. open() not called yet.
    OPENED,//open() has been called.
    HEADERS_RECEIVED,//send() has been called, and headers and status are available.
    LOADING,//Downloading; responseText holds partial data.
    DONE,//The operation is complete.
}
type RequestMethod =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
type ResponseType =
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream'
type EventType =
    | 'load'
    | 'error'
    | 'abort'
    | 'progress'
    | 'timeout'
    | 'loadend'
    | 'loadstart'
type HttpHeader = { [key: string]: string }


const executor = Executors.newCachedThreadPool()

export class XMLHttpRequest {
    private _timeout: number = 120000;
    private _responseType: ResponseType = 'text';
    private _withCredentials: boolean

    private _readyState: ReadyState = ReadyState.UNSENT;

    private _method: RequestMethod
    private _url: string
    private _async: boolean
    private _mimeType: string
    private _requestHeaders: HttpHeader = {};

    private _status: number = 0;
    private _statusText: string = null;
    private _response: any
    private _responseText: any
    private _responseURL: string
    private _responseHeaders: HttpHeader = {};

    private _connection = null;

    get timeout() {
        return this._timeout
    }
    set timeout(timeout: number) {
        this._timeout = timeout
    }
    get readyState() {
        return this._readyState
    }
    set responseType(type: ResponseType) {
        this._responseType = type
    }
    get responseType() {
        return this._responseType
    }

    get status() {
        return this._status
    }
    get statusText() {
        return this._statusText
    }
    get response() {
        return this._response || this.get()
    }
    get responseText() {
        return this._responseText
    }
    get responseXML() {
        return this._response
    }
    get responseURL() {
        return this._responseURL
    }

    public onload: () => void
    public onerror: (ex: Error) => void
    public onabort: () => void
    public onprogress: () => void
    public ontimeout: (ex: Error) => void
    public onloadend: () => void
    public onloadstart: () => void
    public onreadystatechange: () => void

    setRequestHeader(key: string, val: string) {
        this._requestHeaders[key] = val
    }
    getResponseHeader(key: string): string {
        return this._responseHeaders[key]
    }
    getAllResponseHeaders(): any {
        return this._responseHeaders
    }
    addEventListener(event: EventType, callback: Function) {
        this[`on${event.toLowerCase()}`] = callback
    }
    overrideMimeType(mimeType: string) {
        this._mimeType = mimeType
    }
    open(method: RequestMethod, url: string, async: boolean = true, user?: string, password?: string) {
        if (this._readyState !== ReadyState.UNSENT) { throw new Error(`Error Status ${this._readyState}!`) }

        this._method = method
        this._url = url
        this._async = async

        this._connection = new URL(this._url).openConnection()
        if (this._connection instanceof HttpsURLConnection) {
            this._connection.setHostnameVerifier(TrustAnyHostnameVerifier)
            this._connection.setSSLSocketFactory(SSLSocketFactory)
        }
        this._connection.setRequestMethod(this._method)
        this._connection.setDoOutput(true)
        this._connection.setDoInput(true)
        this._connection.setConnectTimeout(this._timeout)
        this._connection.setReadTimeout(this._timeout)

        this.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        this.setReadyState(ReadyState.OPENED)
    }
    send(body?: string | object): Future<string> {
        for (const header in this._requestHeaders) {
            this._connection.setRequestProperty(header, this._requestHeaders[header])
        }
        if (this._readyState !== ReadyState.OPENED) { throw new Error(`Error Status ${this._readyState}!`) }
        let future = executor.submit(new Callable({ call: () => this._send(body) }))
        if (!this._async) { future.get(this._timeout, TimeUnit.MILLISECONDS) }
        return future
    }
    get() {
        if (this._response === undefined) {
            switch (this._responseType) {
                case "json":
                    return this._response = JSON.parse(this._responseText)
                case "text":
                    return this._response = this._responseText
                default:
                    throw Error(`Unsupport ResponseType: ${this._responseType} !`)
            }
        }
        return this._response
    }
    abort() {
        this._connection.disconnect()
        this.onabort && this.onabort()
    }

    private _send(body?: string | object) {
        try {
            this._connection.connect()
            this.onloadstart && this.onloadstart()
            if (body) {
                let bodyType = Object.prototype.toString.call(body)
                if (typeof body !== "string") { throw new Error(`body(${bodyType}) must be string!`) }
                var out = this._connection.getOutputStream()
                out.write(new JavaString(body).getBytes(UTF_8))
                out.flush()
                out.close()
            }
            this.setReadyState(ReadyState.LOADING)
            this._status = this._connection.getResponseCode()
            this._statusText = this._connection.getResponseMessage()
            if (this._status >= 0 && this._status < 300) {
                this._responseText = this.readOutput(this._connection.getInputStream())
            } else if (this._status >= 300 && this._status < 400) {
                this._responseURL = this.getResponseHeader('Location')
            } else {
                this._responseText = this.readOutput(this._connection.getErrorStream())
            }
            this.setResponseHeaders(this._connection.getHeaderFields())
            this.onloadend && this.onloadend()
        } catch (ex) {
            if (ex instanceof SocketTimeoutException && this.ontimeout) {
                return this.ontimeout(ex)
            } else if (this.onerror) {
                return this.onerror(ex)
            }
            throw ex
        } finally {
            this._connection.disconnect()
            this.setReadyState(ReadyState.DONE)
        }
    }

    private setResponseHeaders(header: any) {
        header.forEach((key: string | number, value: string | any[]) => {
            this._responseHeaders[key + ''] = value[value.length - 1] + ''
        })
    }

    private setReadyState(state: ReadyState) {
        this._readyState = state
        this.onreadystatechange && this.onreadystatechange()
    }

    private readOutput(input: any) {
        let output = new ByteArrayOutputStream()
        let buffer = new ByteArray(1024)
        try {
            let n: number
            while ((n = input.read(buffer)) != -1) {
                output.write(buffer, 0, n)
            }
            return output.toString(UTF_8)
        } finally {
            output.close()
        }
    }
}
