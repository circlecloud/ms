// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class URLPermission extends java.security.Permission {
            /**
             * Creates a new URLPermission from a url string and which permits the given
             * request methods and user-settable request headers.
             * The name of the permission is the url string it was created with. Only the scheme,
             * authority and path components of the url are used internally. Any fragment or query
             * components are ignored. The permissions action string is as specified above.
             */
            // @ts-ignore
            constructor(url: string, actions: string)
            /**
             * Creates a URLPermission with the given url string and unrestricted
             * methods and request headers by invoking the two argument
             * constructor as follows: URLPermission(url, "*:*")
             */
            // @ts-ignore
            constructor(url: string)
            /**
             * Returns the normalized method list and request
             * header list, in the form:
             * <pre>
             * "method-names : header-names"
             * </pre>
             * <p>
             * where method-names is the list of methods separated by commas
             * and header-names is the list of permitted headers separated by commas.
             * There is no white space in the returned String. If header-names is empty
             * then the colon separator will not be present.
             */
            // @ts-ignore
            public getActions(): string;
            /**
             * Checks if this URLPermission implies the given permission.
             * Specifically, the following checks are done as if in the
             * following sequence:
             * <ul>
             * <li>if 'p' is not an instance of URLPermission return false</li>
             * <li>if any of p's methods are not in this's method list, and if
             * this's method list is not equal to "*", then return false.</li>
             * <li>if any of p's headers are not in this's request header list, and if
             * this's request header list is not equal to "*", then return false.</li>
             * <li>if this's url scheme is not equal to p's url scheme return false</li>
             * <li>if the scheme specific part of this's url is '*' return true</li>
             * <li>if the set of hosts defined by p's url hostrange is not a subset of
             * this's url hostrange then return false. For example, "*.foo.oracle.com"
             * is a subset of "*.oracle.com". "foo.bar.oracle.com" is not
             * a subset of "*.foo.oracle.com"</li>
             * <li>if the portrange defined by p's url is not a subset of the
             * portrange defined by this's url then return false.
             * <li>if the path or paths specified by p's url are contained in the
             * set of paths specified by this's url, then return true
             * <li>otherwise, return false</li>
             * </ul>
             * <p>Some examples of how paths are matched are shown below:
             * <table border>
             * <caption>Examples of Path Matching</caption>
             * <tr><th>this's path</th><th>p's path</th><th>match</th></tr>
             * <tr><td>/a/b</td><td>/a/b</td><td>yes</td></tr>
             * <tr><td>/a/b/*</td><td>/a/b/c</td><td>yes</td></tr>
             * <tr><td>/a/b/*</td><td>/a/b/c/d</td><td>no</td></tr>
             * <tr><td>/a/b/-</td><td>/a/b/c/d</td><td>yes</td></tr>
             * <tr><td>/a/b/-</td><td>/a/b/c/d/e</td><td>yes</td></tr>
             * <tr><td>/a/b/-</td><td>/a/b/c/*</td><td>yes</td></tr>
             * <tr><td>/a/b/*</td><td>/a/b/c/-</td><td>no</td></tr>
             * </table>
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean;
            /**
             * Returns true if, this.getActions().equals(p.getActions())
             * and p's url equals this's url.  Returns false otherwise.
             */
            // @ts-ignore
            public equals(p: java.lang.Object): boolean;
            /**
             * Returns a hashcode calculated from the hashcode of the
             * actions String and the url string.
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
