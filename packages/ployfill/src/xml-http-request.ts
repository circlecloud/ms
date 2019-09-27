import '@ms/nashorn'

const URL = Java.type("java.net.URL");
const Files = Java.type("java.nio.file.Files");
const StandardCopyOption = Java.type("java.nio.file.StandardCopyOption");
const JavaString = Java.type("java.lang.String");
const SecureRandom = Java.type("java.security.SecureRandom");
const SSLContext = Java.type("javax.net.ssl.SSLContext");
const HttpsURLConnection = Java.type("javax.net.ssl.HttpsURLConnection");
const HostnameVerifier = Java.type("javax.net.ssl.HostnameVerifier");
const X509TrustManager = Java.type("javax.net.ssl.X509TrustManager");

const SocketTimeoutException = Java.type('java.net.SocketTimeoutException');

const Callable = Java.type('java.util.concurrent.Callable');
const Executors = Java.type('java.util.concurrent.Executors')

const UTF_8 = "UTF-8"

const TrustAnyHostnameVerifier = new HostnameVerifier({ verify: () => true });

const SSLSocketFactory = function initSSLSocketFactory() {
    let sslContext = SSLContext.getInstance("TLS");
    sslContext.init(null, [new X509TrustManager({
        getAcceptedIssuers: () => null,
        checkClientTrusted: () => { },
        checkServerTrusted: () => { }
    })], new SecureRandom());
    return sslContext.getSocketFactory();
}();

interface Future<T> {
    cancel(): boolean;
    isCancelled(): boolean;
    isDone(): boolean;
    get(): T;
}

enum ReadyState {
    UNSENT,//Client has been created. open() not called yet.
    OPENED,//open() has been called.
    HEADERS_RECEIVED,//send() has been called, and headers and status are available.
    LOADING,//Downloading; responseText holds partial data.
    DONE,//The operation is complete.
}
type RequestMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
type ResponseType = '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
type EventType = 'load' | 'error' | 'abort' | 'progress' | 'timeout' | 'loadend' | 'loadstart';

const executor = Executors.newCachedThreadPool();

export class XMLHttpRequest {
    private _timeout: number;
    private _responseType: ResponseType;
    private _withCredentials: boolean;

    private _readyState: ReadyState = ReadyState.UNSENT;

    private _method: RequestMethod;
    private _url: string;
    private _async: boolean;
    private _mimeType: string;

    private _status: number = 0;
    private _statusText: string = null;
    private _response: any;
    private _responseURL: string;

    private _connection = null;

    get timeout() {
        return this._timeout;
    }
    set timeout(timeout: number) {
        this._timeout = timeout
    }
    get readyState() {
        return this._readyState;
    }
    set responseType(type: ResponseType) {
        this._responseType = type;
    }
    get responseType() {
        return this._responseType;
    }

    get status() {
        return this._status;
    }
    get statusText() {
        return this._statusText;
    }
    get response() {
        return JSON.parse(this._response);
    }
    get responseText() {
        return this._response;
    }
    get responseXML() {
        return this._response;
    }
    get responseURL() {
        return this._responseURL;
    }

    onreadystatechange() {

    }
    onprogress() {

    }
    onabort() {

    }
    onerror(ex: Error) {

    }
    ontimeout(ex: Error) {

    }

    setRequestHeader(key: string, val: string) {
        this._connection.setRequestProperty(key, val);
    }
    getResponseHeader(key: string): string {
        return this._connection.getHeaderField(key);
    }
    getAllResponseHeaders(): any {
        return this._connection.getHeaderFields();
    }
    addEventListener(event: EventType, callback: Function) {
        this[`on${event.toLowerCase()}`] = callback;
    }
    overrideMimeType(mimeType: string) {
        this._mimeType = mimeType;
    }
    open(method: RequestMethod, url: string, async: boolean = true, user?: string, password?: string) {
        this._method = method;
        this._url = url;
        this._async = async;

        this._connection = new URL(this._url).openConnection()
        if (this._connection instanceof HttpsURLConnection) {
            this._connection.setHostnameVerifier(TrustAnyHostnameVerifier);
            this._connection.setSSLSocketFactory(SSLSocketFactory);
        }
        this._connection.setRequestMethod(this._method);
        this._connection.setDoOutput(true);
        this._connection.setDoInput(true);
        this._connection.setConnectTimeout(this._timeout);
        this._connection.setReadTimeout(this._timeout);

        this.setReadyState(ReadyState.OPENED);
    }
    send(body?: string | object): Future<string> {
        if (this._readyState !== ReadyState.OPENED) { throw new Error(`Error Status ${this._readyState}!`) }
        let future = executor.submit(new Callable({ call: () => this._send(body) }));
        if (!this._async) { future.get() }
        return future;
    }
    abort() {
        this._connection.disconnect();
        this.onabort();
    }

    private _send(body?: string | object) {
        try {
            this._connection.connect();

            if (body) {
                let bodyType = Object.prototype.toString.call(body);
                if (bodyType !== '[object String]') { throw new Error(`body(${bodyType}) must be string!`) }
                var out = this._connection.getOutputStream();
                out.write(new JavaString(body).getBytes(UTF_8));
                out.flush();
                out.close();
            }

            this.setReadyState(ReadyState.LOADING);
            this._status = this._connection.getResponseCode();
            this._statusText = this._connection.getResponseMessage();

            if (this._status >= 0 && this._status < 300) {
                this._response = this.readOutput(this._connection.getInputStream());
            } else if (this._status >= 300 && this._status < 400) {
                this._responseURL = this.getResponseHeader('Location');
            } else {
                this._response = this.readOutput(this._connection.getErrorStream());
            }
            return this._response;
        } catch (ex) {
            if (ex instanceof SocketTimeoutException) {
                this.ontimeout(ex)
            } else {
                this.onerror(ex);
            }
        } finally {
            this._connection.disconnect();
            this.setReadyState(ReadyState.DONE);
        }
    }

    private setReadyState(state: ReadyState) {
        this._readyState = state;
        this.onreadystatechange();
    }

    private readOutput(input: any) {
        var tempFile = Files.createTempFile('xhr', '.response');
        Files.copy(input, tempFile, StandardCopyOption['REPLACE_EXISTING']); tempFile.toFile().deleteOnExit();
        return new JavaString(Files.readAllBytes(tempFile), 'UTF-8');
    }
}
