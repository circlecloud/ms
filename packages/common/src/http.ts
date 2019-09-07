'use strict';
/**
 * HTTP 网络类
 * Created by 蒋天蓓 on 2017/2/9 0009.
 */

/*global Java, base, module, exports, require, __FILE__*/

var URL = Java.type("java.net.URL");
var UUID = Java.type("java.util.UUID");
var System = Java.type("java.lang.System");
var Files = Java.type("java.nio.file.Files");
var Paths = Java.type("java.nio.file.Paths");
var JavaString = Java.type("java.lang.String");
var SecureRandom = Java.type("java.security.SecureRandom");

var SSLContext = Java.type("javax.net.ssl.SSLContext");
var HttpsURLConnection = Java.type("javax.net.ssl.HttpsURLConnection");

var HostnameVerifier = Java.type("javax.net.ssl.HostnameVerifier");
var X509TrustManager = Java.type("javax.net.ssl.X509TrustManager");

// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
var TrustAnyHostnameVerifier = new HostnameVerifier({
    verify: function(hostname, session) {
        return true;
    }
});

var SSLSocketFactory = function initSSLSocketFactory() {
    var sslContext = SSLContext.getInstance("TLS");
    // noinspection JSUnusedGlobalSymbols
    sslContext.init(null, [new X509TrustManager({
        getAcceptedIssuers: function() {
            return null;
        },
        checkClientTrusted: function(chain, authType) {
        },
        checkServerTrusted: function(chain, authType) {
        }
    })], new SecureRandom());
    return sslContext.getSocketFactory();
}();

var config = {
    Charset: 'UTF-8',
    ConnectTimeout: 10000,
    ReadTimeout: 10000,
    Debug: false
};

function open(url, method, header) {
    // conn.setRequestProperty
    var conn = new URL(url).openConnection();
    if (conn instanceof HttpsURLConnection) {
        conn.setHostnameVerifier(TrustAnyHostnameVerifier);
        conn.setSSLSocketFactory(SSLSocketFactory);
    }
    conn.setRequestMethod(method);
    conn.setDoOutput(true);
    conn.setDoInput(true);
    conn.setConnectTimeout(config.ConnectTimeout);
    conn.setReadTimeout(config.ReadTimeout);
    if (header) {
        for (var key in header) {
            // noinspection JSUnfilteredForInLoop
            conn.setRequestProperty(key, header[key]);
        }
    }
    return conn;
}

function buildUrl(url, params) {
    if (params && Object.keys(params).length > 0) {
        var queryStart = url.indexOf('?');
        if (queryStart === -1) {
            url += '?';
        }
        return url += object2URLSearchParams(params);
    }
    return url;
}

function request(config) {
    var conn = open(buildUrl(config.url, config.query), config.method, config.header);
    try {
        conn.connect();
        var data = config.data;
        if (data) {
            var out = conn.getOutputStream();
            if (typeof data === "object") {
                var type = config.header['Content-Type'];
                switch (type) {
                    case "application/x-www-form-urlencoded":
                        data = object2URLSearchParams(data);
                        break;
                    default:
                        data = JSON.stringify(data)
                }
            }
            out.write(new JavaString(data).getBytes(config.Charset));
            out.flush();
            out.close();
        }
        return response(conn);
    } finally {
        conn.disconnect();
    }
}

function response(conn) {
    var temp = Paths.get(System.getProperty("java.io.tmpdir"), UUID.randomUUID().toString());
    Files.copy(conn.getInputStream(), temp);
    var result = new JavaString(Files.readAllBytes(temp), config.Charset);
    var tempFile = temp.toFile();
    tempFile.delete() || tempFile.deleteOnExit();
    return result;
}

function object2URLSearchParams(params) {
    var temp: string[] = [];
    for (var key in params) {
        temp.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    }
    return temp.join('&')
}

var http = {
    config: config,
    request: request
};

['GET', 'DELETE', 'HEAD', 'OPTIONS'].forEach(function(method) {
    http[method.toLowerCase()] = function __likeGet__(url, data, config = {}) {
        return this.request({
            ...config,
            url: url,
            method: method,
            query: data
        });
    }
});

['POST', 'PUT', 'PATCH'].forEach(function(method) {
    http[method.toLowerCase()] = function __likePost__(url, data, config) {
        return this.request({
            ...config,
            url: url,
            method: method,
            data: data
        });
    }
});

export = http;
