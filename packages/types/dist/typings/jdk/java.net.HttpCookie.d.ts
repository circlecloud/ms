declare namespace java {
    namespace net {
        // @ts-ignore
         class HttpCookie extends java.lang.Object {
            /**
             * Constructs a cookie with a specified name and value.
             * <p> The name must conform to RFC 2965. That means it can contain
             * only ASCII alphanumeric characters and cannot contain commas,
             * semicolons, or white space or begin with a $ character. The cookie's
             * name cannot be changed after creation.
             * <p> The value can be anything the server chooses to send. Its
             * value is probably of interest only to the server. The cookie's
             * value can be changed after creation with the
             * {@code setValue} method.
             * <p> By default, cookies are created according to the RFC 2965
             * cookie specification. The version can be changed with the
             * {@code setVersion} method.
             */
            // @ts-ignore
            constructor(name: string, value: string)
            /**
             * Constructs cookies from set-cookie or set-cookie2 header string.
             * RFC 2965 section 3.2.2 set-cookie2 syntax indicates that one header line
             * may contain more than one cookie definitions, so this is a static
             * utility method instead of another constructor.
             */
            // @ts-ignore
            public static parse(header: string): java.util.List;
            /**
             * Reports whether this HTTP cookie has expired or not.
             */
            // @ts-ignore
            public hasExpired(): boolean;
            /**
             * Specifies a comment that describes a cookie's purpose.
             * The comment is useful if the browser presents the cookie
             * to the user. Comments are not supported by Netscape Version 0 cookies.
             */
            // @ts-ignore
            public setComment(purpose: string): void;
            /**
             * Returns the comment describing the purpose of this cookie, or
             * {@code null} if the cookie has no comment.
             */
            // @ts-ignore
            public getComment(): string;
            /**
             * Specifies a comment URL that describes a cookie's purpose.
             * The comment URL is useful if the browser presents the cookie
             * to the user. Comment URL is RFC 2965 only.
             */
            // @ts-ignore
            public setCommentURL(purpose: string): void;
            /**
             * Returns the comment URL describing the purpose of this cookie, or
             * {@code null} if the cookie has no comment URL.
             */
            // @ts-ignore
            public getCommentURL(): string;
            /**
             * Specify whether user agent should discard the cookie unconditionally.
             * This is RFC 2965 only attribute.
             */
            // @ts-ignore
            public setDiscard(discard: boolean): void;
            /**
             * Returns the discard attribute of the cookie
             */
            // @ts-ignore
            public getDiscard(): boolean;
            /**
             * Specify the portlist of the cookie, which restricts the port(s)
             * to which a cookie may be sent back in a Cookie header.
             */
            // @ts-ignore
            public setPortlist(ports: string): void;
            /**
             * Returns the port list attribute of the cookie
             */
            // @ts-ignore
            public getPortlist(): string;
            /**
             * Specifies the domain within which this cookie should be presented.
             * <p> The form of the domain name is specified by RFC 2965. A domain
             * name begins with a dot ({@code .foo.com}) and means that
             * the cookie is visible to servers in a specified Domain Name System
             * (DNS) zone (for example, {@code www.foo.com}, but not
             * {@code a.b.foo.com}). By default, cookies are only returned
             * to the server that sent them.
             */
            // @ts-ignore
            public setDomain(pattern: string): void;
            /**
             * Returns the domain name set for this cookie. The form of the domain name
             * is set by RFC 2965.
             */
            // @ts-ignore
            public getDomain(): string;
            /**
             * Sets the maximum age of the cookie in seconds.
             * <p> A positive value indicates that the cookie will expire
             * after that many seconds have passed. Note that the value is
             * the <i>maximum</i> age when the cookie will expire, not the cookie's
             * current age.
             * <p> A negative value means that the cookie is not stored persistently
             * and will be deleted when the Web browser exits. A zero value causes the
             * cookie to be deleted.
             */
            // @ts-ignore
            public setMaxAge(expiry: number): void;
            /**
             * Returns the maximum age of the cookie, specified in seconds. By default,
             * {@code -1} indicating the cookie will persist until browser shutdown.
             */
            // @ts-ignore
            public getMaxAge(): number;
            /**
             * Specifies a path for the cookie to which the client should return
             * the cookie.
             * <p> The cookie is visible to all the pages in the directory
             * you specify, and all the pages in that directory's subdirectories.
             * A cookie's path must include the servlet that set the cookie,
             * for example, <i>/catalog</i>, which makes the cookie
             * visible to all directories on the server under <i>/catalog</i>.
             * <p> Consult RFC 2965 (available on the Internet) for more
             * information on setting path names for cookies.
             */
            // @ts-ignore
            public setPath(uri: string): void;
            /**
             * Returns the path on the server to which the browser returns this cookie.
             * The cookie is visible to all subpaths on the server.
             */
            // @ts-ignore
            public getPath(): string;
            /**
             * Indicates whether the cookie should only be sent using a secure protocol,
             * such as HTTPS or SSL.
             * <p> The default value is {@code false}.
             */
            // @ts-ignore
            public setSecure(flag: boolean): void;
            /**
             * Returns {@code true} if sending this cookie should be restricted to a
             * secure protocol, or {@code false} if the it can be sent using any
             * protocol.
             */
            // @ts-ignore
            public getSecure(): boolean;
            /**
             * Returns the name of the cookie. The name cannot be changed after
             * creation.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Assigns a new value to a cookie after the cookie is created.
             * If you use a binary value, you may want to use BASE64 encoding.
             * <p> With Version 0 cookies, values should not contain white space,
             * brackets, parentheses, equals signs, commas, double quotes, slashes,
             * question marks, at signs, colons, and semicolons. Empty values may not
             * behave the same way on all browsers.
             */
            // @ts-ignore
            public setValue(newValue: string): void;
            /**
             * Returns the value of the cookie.
             */
            // @ts-ignore
            public getValue(): string;
            /**
             * Returns the version of the protocol this cookie complies with. Version 1
             * complies with RFC 2965/2109, and version 0 complies with the original
             * cookie specification drafted by Netscape. Cookies provided by a browser
             * use and identify the browser's cookie version.
             */
            // @ts-ignore
            public getVersion(): number;
            /**
             * Sets the version of the cookie protocol this cookie complies
             * with. Version 0 complies with the original Netscape cookie
             * specification. Version 1 complies with RFC 2965/2109.
             */
            // @ts-ignore
            public setVersion(v: number): void;
            /**
             * Returns {@code true} if this cookie contains the <i>HttpOnly</i>
             * attribute. This means that the cookie should not be accessible to
             * scripting engines, like javascript.
             */
            // @ts-ignore
            public isHttpOnly(): boolean;
            /**
             * Indicates whether the cookie should be considered HTTP Only. If set to
             * {@code true} it means the cookie should not be accessible to scripting
             * engines like javascript.
             */
            // @ts-ignore
            public setHttpOnly(httpOnly: boolean): void;
            /**
             * The utility method to check whether a host name is in a domain or not.
             * <p> This concept is described in the cookie specification.
             * To understand the concept, some terminologies need to be defined first:
             * <blockquote>
             * effective host name = hostname if host name contains dot<br>
             * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or = hostname.local if not
             * </blockquote>
             * <p>Host A's name domain-matches host B's if:
             * <blockquote><ul>
             * <li>their host name strings string-compare equal; or</li>
             * <li>A is a HDN string and has the form NB, where N is a non-empty
             * name string, B has the form .B', and B' is a HDN string.  (So,
             * x.y.com domain-matches .Y.com but not Y.com.)</li>
             * </ul></blockquote>
             * <p>A host isn't in a domain (RFC 2965 sec. 3.3.2) if:
             * <blockquote><ul>
             * <li>The value for the Domain attribute contains no embedded dots,
             * and the value is not .local.</li>
             * <li>The effective host name that derives from the request-host does
             * not domain-match the Domain attribute.</li>
             * <li>The request-host is a HDN (not IP address) and has the form HD,
             * where D is the value of the Domain attribute, and H is a string
             * that contains one or more dots.</li>
             * </ul></blockquote>
             * <p>Examples:
             * <blockquote><ul>
             * <li>A Set-Cookie2 from request-host y.x.foo.com for Domain=.foo.com
             * would be rejected, because H is y.x and contains a dot.</li>
             * <li>A Set-Cookie2 from request-host x.foo.com for Domain=.foo.com
             * would be accepted.</li>
             * <li>A Set-Cookie2 with Domain=.com or Domain=.com., will always be
             * rejected, because there is no embedded dot.</li>
             * <li>A Set-Cookie2 from request-host example for Domain=.local will
             * be accepted, because the effective host name for the request-
             * host is example.local, and example.local domain-matches .local.</li>
             * </ul></blockquote>
             */
            // @ts-ignore
            public static domainMatches(domain: string, host: string): boolean;
            /**
             * Constructs a cookie header string representation of this cookie,
             * which is in the format defined by corresponding cookie specification,
             * but without the leading "Cookie:" token.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Test the equality of two HTTP cookies.
             * <p> The result is {@code true} only if two cookies come from same domain
             * (case-insensitive), have same name (case-insensitive), and have same path
             * (case-sensitive).
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code of this HTTP cookie. The result is the sum of
             * hash code value of three significant components of this cookie: name,
             * domain, and path. That is, the hash code is the value of the expression:
             * <blockquote>
             * getName().toLowerCase().hashCode()<br>
             * + getDomain().toLowerCase().hashCode()<br>
             * + getPath().hashCode()
             * </blockquote>
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Create and return a copy of this object.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
