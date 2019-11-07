declare namespace java {
    namespace net {
        // @ts-ignore
         class URI extends java.lang.Object {
            /**
             * Constructs a URI by parsing the given string.
             * <p> This constructor parses the given string exactly as specified by the
             * grammar in <a
             * href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
             * Appendix&nbsp;A, <b><i>except for the following deviations:</i></b> </p>
             * <ul>
             * <li><p> An empty authority component is permitted as long as it is
             * followed by a non-empty path, a query component, or a fragment
             * component.  This allows the parsing of URIs such as
             * {@code "file:///foo/bar"}, which seems to be the intent of
             * RFC&nbsp;2396 although the grammar does not permit it.  If the
             * authority component is empty then the user-information, host, and port
             * components are undefined. </p></li>
             * <li><p> Empty relative paths are permitted; this seems to be the
             * intent of RFC&nbsp;2396 although the grammar does not permit it.  The
             * primary consequence of this deviation is that a standalone fragment
             * such as {@code "#foo"} parses as a relative URI with an empty path
             * and the given fragment, and can be usefully <a
             * href="#resolve-frag">resolved</a> against a base URI.
             * <li><p> IPv4 addresses in host components are parsed rigorously, as
             * specified by <a
             * href="http://www.ietf.org/rfc/rfc2732.txt">RFC&nbsp;2732</a>: Each
             * element of a dotted-quad address must contain no more than three
             * decimal digits.  Each element is further constrained to have a value
             * no greater than 255. </p></li>
             * <li> <p> Hostnames in host components that comprise only a single
             * domain label are permitted to start with an <i>alphanum</i>
             * character. This seems to be the intent of <a
             * href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>
             * section&nbsp;3.2.2 although the grammar does not permit it. The
             * consequence of this deviation is that the authority component of a
             * hierarchical URI such as {@code s://123}, will parse as a server-based
             * authority. </p></li>
             * <li><p> IPv6 addresses are permitted for the host component.  An IPv6
             * address must be enclosed in square brackets ({@code '['} and
             * {@code ']'}) as specified by <a
             * href="http://www.ietf.org/rfc/rfc2732.txt">RFC&nbsp;2732</a>.  The
             * IPv6 address itself must parse according to <a
             * href="http://www.ietf.org/rfc/rfc2373.txt">RFC&nbsp;2373</a>.  IPv6
             * addresses are further constrained to describe no more than sixteen
             * bytes of address information, a constraint implicit in RFC&nbsp;2373
             * but not expressible in the grammar. </p></li>
             * <li><p> Characters in the <i>other</i> category are permitted wherever
             * RFC&nbsp;2396 permits <i>escaped</i> octets, that is, in the
             * user-information, path, query, and fragment components, as well as in
             * the authority component if the authority is registry-based.  This
             * allows URIs to contain Unicode characters beyond those in the US-ASCII
             * character set. </p></li>
             * </ul>
             */
            // @ts-ignore
            constructor(str: string)
            /**
             * Constructs a hierarchical URI from the given components.
             * <p> If a scheme is given then the path, if also given, must either be
             * empty or begin with a slash character ({@code '/'}).  Otherwise a
             * component of the new URI may be left undefined by passing {@code null}
             * for the corresponding parameter or, in the case of the {@code port}
             * parameter, by passing {@code -1}.
             * <p> This constructor first builds a URI string from the given components
             * according to the rules specified in <a
             * href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
             * section&nbsp;5.2, step&nbsp;7: </p>
             * <ol>
             * <li><p> Initially, the result string is empty. </p></li>
             * <li><p> If a scheme is given then it is appended to the result,
             * followed by a colon character ({@code ':'}).  </p></li>
             * <li><p> If user information, a host, or a port are given then the
             * string {@code "//"} is appended.  </p></li>
             * <li><p> If user information is given then it is appended, followed by
             * a commercial-at character ({@code '@'}).  Any character not in the
             * <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, or <i>other</i>
             * categories is <a href="#quote">quoted</a>.  </p></li>
             * <li><p> If a host is given then it is appended.  If the host is a
             * literal IPv6 address but is not enclosed in square brackets
             * ({@code '['} and {@code ']'}) then the square brackets are added.
             * </p></li>
             * <li><p> If a port number is given then a colon character
             * ({@code ':'}) is appended, followed by the port number in decimal.
             * </p></li>
             * <li><p> If a path is given then it is appended.  Any character not in
             * the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, or <i>other</i>
             * categories, and not equal to the slash character ({@code '/'}) or the
             * commercial-at character ({@code '@'}), is quoted.  </p></li>
             * <li><p> If a query is given then a question-mark character
             * ({@code '?'}) is appended, followed by the query.  Any character that
             * is not a <a href="#legal-chars">legal URI character</a> is quoted.
             * </p></li>
             * <li><p> Finally, if a fragment is given then a hash character
             * ({@code '#'}) is appended, followed by the fragment.  Any character
             * that is not a legal URI character is quoted.  </p></li>
             * </ol>
             * <p> The resulting URI string is then parsed as if by invoking the {@link
             * #URI(String)} constructor and then invoking the {@link
             * #parseServerAuthority()} method upon the result; this may cause a {@link
             * URISyntaxException} to be thrown.  </p>
             */
            // @ts-ignore
            constructor(scheme: string, userInfo: string, host: string, port: number, path: string, query: string, fragment: string)
            /**
             * Constructs a hierarchical URI from the given components.
             * <p> If a scheme is given then the path, if also given, must either be
             * empty or begin with a slash character ({@code '/'}).  Otherwise a
             * component of the new URI may be left undefined by passing {@code null}
             * for the corresponding parameter.
             * <p> This constructor first builds a URI string from the given components
             * according to the rules specified in <a
             * href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
             * section&nbsp;5.2, step&nbsp;7: </p>
             * <ol>
             * <li><p> Initially, the result string is empty.  </p></li>
             * <li><p> If a scheme is given then it is appended to the result,
             * followed by a colon character ({@code ':'}).  </p></li>
             * <li><p> If an authority is given then the string {@code "//"} is
             * appended, followed by the authority.  If the authority contains a
             * literal IPv6 address then the address must be enclosed in square
             * brackets ({@code '['} and {@code ']'}).  Any character not in the
             * <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, or <i>other</i>
             * categories, and not equal to the commercial-at character
             * ({@code '@'}), is <a href="#quote">quoted</a>.  </p></li>
             * <li><p> If a path is given then it is appended.  Any character not in
             * the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, or <i>other</i>
             * categories, and not equal to the slash character ({@code '/'}) or the
             * commercial-at character ({@code '@'}), is quoted.  </p></li>
             * <li><p> If a query is given then a question-mark character
             * ({@code '?'}) is appended, followed by the query.  Any character that
             * is not a <a href="#legal-chars">legal URI character</a> is quoted.
             * </p></li>
             * <li><p> Finally, if a fragment is given then a hash character
             * ({@code '#'}) is appended, followed by the fragment.  Any character
             * that is not a legal URI character is quoted.  </p></li>
             * </ol>
             * <p> The resulting URI string is then parsed as if by invoking the {@link
             * #URI(String)} constructor and then invoking the {@link
             * #parseServerAuthority()} method upon the result; this may cause a {@link
             * URISyntaxException} to be thrown.  </p>
             */
            // @ts-ignore
            constructor(scheme: string, authority: string, path: string, query: string, fragment: string)
            /**
             * Constructs a hierarchical URI from the given components.
             * <p> A component may be left undefined by passing {@code null}.
             * <p> This convenience constructor works as if by invoking the
             * seven-argument constructor as follows:
             * <blockquote>
             * {@code new} {@link #URI(String, String, String, int, String, String, String)
             * URI}{@code (scheme, null, host, -1, path, null, fragment);}
             * </blockquote>
             */
            // @ts-ignore
            constructor(scheme: string, host: string, path: string, fragment: string)
            /**
             * Constructs a URI from the given components.
             * <p> A component may be left undefined by passing {@code null}.
             * <p> This constructor first builds a URI in string form using the given
             * components as follows:  </p>
             * <ol>
             * <li><p> Initially, the result string is empty.  </p></li>
             * <li><p> If a scheme is given then it is appended to the result,
             * followed by a colon character ({@code ':'}).  </p></li>
             * <li><p> If a scheme-specific part is given then it is appended.  Any
             * character that is not a <a href="#legal-chars">legal URI character</a>
             * is <a href="#quote">quoted</a>.  </p></li>
             * <li><p> Finally, if a fragment is given then a hash character
             * ({@code '#'}) is appended to the string, followed by the fragment.
             * Any character that is not a legal URI character is quoted.  </p></li>
             * </ol>
             * <p> The resulting URI string is then parsed in order to create the new
             * URI instance as if by invoking the {@link #URI(String)} constructor;
             * this may cause a {@link URISyntaxException} to be thrown.  </p>
             */
            // @ts-ignore
            constructor(scheme: string, ssp: string, fragment: string)
            /**
             * Creates a URI by parsing the given string.
             * <p> This convenience factory method works as if by invoking the {@link
             * #URI(String)} constructor; any {@link URISyntaxException} thrown by the
             * constructor is caught and wrapped in a new {@link
             * IllegalArgumentException} object, which is then thrown.
             * <p> This method is provided for use in situations where it is known that
             * the given string is a legal URI, for example for URI constants declared
             * within in a program, and so it would be considered a programming error
             * for the string not to parse as such.  The constructors, which throw
             * {@link URISyntaxException} directly, should be used situations where a
             * URI is being constructed from user input or from some other source that
             * may be prone to errors.  </p>
             */
            // @ts-ignore
            public static create(str: string): java.net.URI;
            /**
             * Attempts to parse this URI's authority component, if defined, into
             * user-information, host, and port components.
             * <p> If this URI's authority component has already been recognized as
             * being server-based then it will already have been parsed into
             * user-information, host, and port components.  In this case, or if this
             * URI has no authority component, this method simply returns this URI.
             * <p> Otherwise this method attempts once more to parse the authority
             * component into user-information, host, and port components, and throws
             * an exception describing why the authority component could not be parsed
             * in that way.
             * <p> This method is provided because the generic URI syntax specified in
             * <a href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>
             * cannot always distinguish a malformed server-based authority from a
             * legitimate registry-based authority.  It must therefore treat some
             * instances of the former as instances of the latter.  The authority
             * component in the URI string {@code "//foo:bar"}, for example, is not a
             * legal server-based authority but it is legal as a registry-based
             * authority.
             * <p> In many common situations, for example when working URIs that are
             * known to be either URNs or URLs, the hierarchical URIs being used will
             * always be server-based.  They therefore must either be parsed as such or
             * treated as an error.  In these cases a statement such as
             * <blockquote>
             * {@code URI }<i>u</i>{@code  = new URI(str).parseServerAuthority();}
             * </blockquote>
             * <p> can be used to ensure that <i>u</i> always refers to a URI that, if
             * it has an authority component, has a server-based authority with proper
             * user-information, host, and port components.  Invoking this method also
             * ensures that if the authority could not be parsed in that way then an
             * appropriate diagnostic message can be issued based upon the exception
             * that is thrown. </p>
             */
            // @ts-ignore
            public parseServerAuthority(): java.net.URI;
            /**
             * Normalizes this URI's path.
             * <p> If this URI is opaque, or if its path is already in normal form,
             * then this URI is returned.  Otherwise a new URI is constructed that is
             * identical to this URI except that its path is computed by normalizing
             * this URI's path in a manner consistent with <a
             * href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
             * section&nbsp;5.2, step&nbsp;6, sub-steps&nbsp;c through&nbsp;f; that is:
             * </p>
             * <ol>
             * <li><p> All {@code "."} segments are removed. </p></li>
             * <li><p> If a {@code ".."} segment is preceded by a non-{@code ".."}
             * segment then both of these segments are removed.  This step is
             * repeated until it is no longer applicable. </p></li>
             * <li><p> If the path is relative, and if its first segment contains a
             * colon character ({@code ':'}), then a {@code "."} segment is
             * prepended.  This prevents a relative URI with a path such as
             * {@code "a:b/c/d"} from later being re-parsed as an opaque URI with a
             * scheme of {@code "a"} and a scheme-specific part of {@code "b/c/d"}.
             * <b><i>(Deviation from RFC&nbsp;2396)</i></b> </p></li>
             * </ol>
             * <p> A normalized path will begin with one or more {@code ".."} segments
             * if there were insufficient non-{@code ".."} segments preceding them to
             * allow their removal.  A normalized path will begin with a {@code "."}
             * segment if one was inserted by step 3 above.  Otherwise, a normalized
             * path will not contain any {@code "."} or {@code ".."} segments. </p>
             */
            // @ts-ignore
            public normalize(): java.net.URI;
            /**
             * Resolves the given URI against this URI.
             * <p> If the given URI is already absolute, or if this URI is opaque, then
             * the given URI is returned.
             * <p><a name="resolve-frag"></a> If the given URI's fragment component is
             * defined, its path component is empty, and its scheme, authority, and
             * query components are undefined, then a URI with the given fragment but
             * with all other components equal to those of this URI is returned.  This
             * allows a URI representing a standalone fragment reference, such as
             * {@code "#foo"}, to be usefully resolved against a base URI.
             * <p> Otherwise this method constructs a new hierarchical URI in a manner
             * consistent with <a
             * href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
             * section&nbsp;5.2; that is: </p>
             * <ol>
             * <li><p> A new URI is constructed with this URI's scheme and the given
             * URI's query and fragment components. </p></li>
             * <li><p> If the given URI has an authority component then the new URI's
             * authority and path are taken from the given URI. </p></li>
             * <li><p> Otherwise the new URI's authority component is copied from
             * this URI, and its path is computed as follows: </p>
             * <ol>
             * <li><p> If the given URI's path is absolute then the new URI's path
             * is taken from the given URI. </p></li>
             * <li><p> Otherwise the given URI's path is relative, and so the new
             * URI's path is computed by resolving the path of the given URI
             * against the path of this URI.  This is done by concatenating all but
             * the last segment of this URI's path, if any, with the given URI's
             * path and then normalizing the result as if by invoking the {@link
             * #normalize() normalize} method. </p></li>
             * </ol></li>
             * </ol>
             * <p> The result of this method is absolute if, and only if, either this
             * URI is absolute or the given URI is absolute.  </p>
             */
            // @ts-ignore
            public resolve(uri: java.net.URI): java.net.URI;
            /**
             * Constructs a new URI by parsing the given string and then resolving it
             * against this URI.
             * <p> This convenience method works as if invoking it were equivalent to
             * evaluating the expression {@link #resolve(java.net.URI)
             * resolve}{@code (URI.}{@link #create(String) create}{@code (str))}. </p>
             */
            // @ts-ignore
            public resolve(str: string): java.net.URI;
            /**
             * Relativizes the given URI against this URI.
             * <p> The relativization of the given URI against this URI is computed as
             * follows: </p>
             * <ol>
             * <li><p> If either this URI or the given URI are opaque, or if the
             * scheme and authority components of the two URIs are not identical, or
             * if the path of this URI is not a prefix of the path of the given URI,
             * then the given URI is returned. </p></li>
             * <li><p> Otherwise a new relative hierarchical URI is constructed with
             * query and fragment components taken from the given URI and with a path
             * component computed by removing this URI's path from the beginning of
             * the given URI's path. </p></li>
             * </ol>
             */
            // @ts-ignore
            public relativize(uri: java.net.URI): java.net.URI;
            /**
             * Constructs a URL from this URI.
             * <p> This convenience method works as if invoking it were equivalent to
             * evaluating the expression {@code new URL(this.toString())} after
             * first checking that this URI is absolute. </p>
             */
            // @ts-ignore
            public toURL(): java.net.URL;
            /**
             * Returns the scheme component of this URI.
             * <p> The scheme component of a URI, if defined, only contains characters
             * in the <i>alphanum</i> category and in the string {@code "-.+"}.  A
             * scheme always starts with an <i>alpha</i> character. <p>
             * The scheme component of a URI cannot contain escaped octets, hence this
             * method does not perform any decoding.
             */
            // @ts-ignore
            public getScheme(): string;
            /**
             * Tells whether or not this URI is absolute.
             * <p> A URI is absolute if, and only if, it has a scheme component. </p>
             */
            // @ts-ignore
            public isAbsolute(): boolean;
            /**
             * Tells whether or not this URI is opaque.
             * <p> A URI is opaque if, and only if, it is absolute and its
             * scheme-specific part does not begin with a slash character ('/').
             * An opaque URI has a scheme, a scheme-specific part, and possibly
             * a fragment; all other components are undefined. </p>
             */
            // @ts-ignore
            public isOpaque(): boolean;
            /**
             * Returns the raw scheme-specific part of this URI.  The scheme-specific
             * part is never undefined, though it may be empty.
             * <p> The scheme-specific part of a URI only contains legal URI
             * characters. </p>
             */
            // @ts-ignore
            public getRawSchemeSpecificPart(): string;
            /**
             * Returns the decoded scheme-specific part of this URI.
             * <p> The string returned by this method is equal to that returned by the
             * {@link #getRawSchemeSpecificPart() getRawSchemeSpecificPart} method
             * except that all sequences of escaped octets are <a
             * href="#decode">decoded</a>.  </p>
             */
            // @ts-ignore
            public getSchemeSpecificPart(): string;
            /**
             * Returns the raw authority component of this URI.
             * <p> The authority component of a URI, if defined, only contains the
             * commercial-at character ({@code '@'}) and characters in the
             * <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and <i>other</i>
             * categories.  If the authority is server-based then it is further
             * constrained to have valid user-information, host, and port
             * components. </p>
             */
            // @ts-ignore
            public getRawAuthority(): string;
            /**
             * Returns the decoded authority component of this URI.
             * <p> The string returned by this method is equal to that returned by the
             * {@link #getRawAuthority() getRawAuthority} method except that all
             * sequences of escaped octets are <a href="#decode">decoded</a>.  </p>
             */
            // @ts-ignore
            public getAuthority(): string;
            /**
             * Returns the raw user-information component of this URI.
             * <p> The user-information component of a URI, if defined, only contains
             * characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>, and
             * <i>other</i> categories. </p>
             */
            // @ts-ignore
            public getRawUserInfo(): string;
            /**
             * Returns the decoded user-information component of this URI.
             * <p> The string returned by this method is equal to that returned by the
             * {@link #getRawUserInfo() getRawUserInfo} method except that all
             * sequences of escaped octets are <a href="#decode">decoded</a>.  </p>
             */
            // @ts-ignore
            public getUserInfo(): string;
            /**
             * Returns the host component of this URI.
             * <p> The host component of a URI, if defined, will have one of the
             * following forms: </p>
             * <ul>
             * <li><p> A domain name consisting of one or more <i>labels</i>
             * separated by period characters ({@code '.'}), optionally followed by
             * a period character.  Each label consists of <i>alphanum</i> characters
             * as well as hyphen characters ({@code '-'}), though hyphens never
             * occur as the first or last characters in a label. The rightmost
             * label of a domain name consisting of two or more labels, begins
             * with an <i>alpha</i> character. </li>
             * <li><p> A dotted-quad IPv4 address of the form
             * <i>digit</i>{@code +.}<i>digit</i>{@code +.}<i>digit</i>{@code +.}<i>digit</i>{@code +},
             * where no <i>digit</i> sequence is longer than three characters and no
             * sequence has a value larger than 255. </p></li>
             * <li><p> An IPv6 address enclosed in square brackets ({@code '['} and
             * {@code ']'}) and consisting of hexadecimal digits, colon characters
             * ({@code ':'}), and possibly an embedded IPv4 address.  The full
             * syntax of IPv6 addresses is specified in <a
             * href="http://www.ietf.org/rfc/rfc2373.txt"><i>RFC&nbsp;2373: IPv6
             * Addressing Architecture</i></a>.  </p></li>
             * </ul>
             * The host component of a URI cannot contain escaped octets, hence this
             * method does not perform any decoding.
             */
            // @ts-ignore
            public getHost(): string;
            /**
             * Returns the port number of this URI.
             * <p> The port component of a URI, if defined, is a non-negative
             * integer. </p>
             */
            // @ts-ignore
            public getPort(): number;
            /**
             * Returns the raw path component of this URI.
             * <p> The path component of a URI, if defined, only contains the slash
             * character ({@code '/'}), the commercial-at character ({@code '@'}),
             * and characters in the <i>unreserved</i>, <i>punct</i>, <i>escaped</i>,
             * and <i>other</i> categories. </p>
             */
            // @ts-ignore
            public getRawPath(): string;
            /**
             * Returns the decoded path component of this URI.
             * <p> The string returned by this method is equal to that returned by the
             * {@link #getRawPath() getRawPath} method except that all sequences of
             * escaped octets are <a href="#decode">decoded</a>.  </p>
             */
            // @ts-ignore
            public getPath(): string;
            /**
             * Returns the raw query component of this URI.
             * <p> The query component of a URI, if defined, only contains legal URI
             * characters. </p>
             */
            // @ts-ignore
            public getRawQuery(): string;
            /**
             * Returns the decoded query component of this URI.
             * <p> The string returned by this method is equal to that returned by the
             * {@link #getRawQuery() getRawQuery} method except that all sequences of
             * escaped octets are <a href="#decode">decoded</a>.  </p>
             */
            // @ts-ignore
            public getQuery(): string;
            /**
             * Returns the raw fragment component of this URI.
             * <p> The fragment component of a URI, if defined, only contains legal URI
             * characters. </p>
             */
            // @ts-ignore
            public getRawFragment(): string;
            /**
             * Returns the decoded fragment component of this URI.
             * <p> The string returned by this method is equal to that returned by the
             * {@link #getRawFragment() getRawFragment} method except that all
             * sequences of escaped octets are <a href="#decode">decoded</a>.  </p>
             */
            // @ts-ignore
            public getFragment(): string;
            /**
             * Tests this URI for equality with another object.
             * <p> If the given object is not a URI then this method immediately
             * returns {@code false}.
             * <p> For two URIs to be considered equal requires that either both are
             * opaque or both are hierarchical.  Their schemes must either both be
             * undefined or else be equal without regard to case. Their fragments
             * must either both be undefined or else be equal.
             * <p> For two opaque URIs to be considered equal, their scheme-specific
             * parts must be equal.
             * <p> For two hierarchical URIs to be considered equal, their paths must
             * be equal and their queries must either both be undefined or else be
             * equal.  Their authorities must either both be undefined, or both be
             * registry-based, or both be server-based.  If their authorities are
             * defined and are registry-based, then they must be equal.  If their
             * authorities are defined and are server-based, then their hosts must be
             * equal without regard to case, their port numbers must be equal, and
             * their user-information components must be equal.
             * <p> When testing the user-information, path, query, fragment, authority,
             * or scheme-specific parts of two URIs for equality, the raw forms rather
             * than the encoded forms of these components are compared and the
             * hexadecimal digits of escaped octets are compared without regard to
             * case.
             * <p> This method satisfies the general contract of the {@link
             * java.lang.Object#equals(Object) Object.equals} method. </p>
             */
            // @ts-ignore
            public equals(ob: java.lang.Object): boolean;
            /**
             * Returns a hash-code value for this URI.  The hash code is based upon all
             * of the URI's components, and satisfies the general contract of the
             * {@link java.lang.Object#hashCode() Object.hashCode} method.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares this URI to another object, which must be a URI.
             * <p> When comparing corresponding components of two URIs, if one
             * component is undefined but the other is defined then the first is
             * considered to be less than the second.  Unless otherwise noted, string
             * components are ordered according to their natural, case-sensitive
             * ordering as defined by the {@link java.lang.String#compareTo(Object)
             * String.compareTo} method.  String components that are subject to
             * encoding are compared by comparing their raw forms rather than their
             * encoded forms.
             * <p> The ordering of URIs is defined as follows: </p>
             * <ul>
             * <li><p> Two URIs with different schemes are ordered according the
             * ordering of their schemes, without regard to case. </p></li>
             * <li><p> A hierarchical URI is considered to be less than an opaque URI
             * with an identical scheme. </p></li>
             * <li><p> Two opaque URIs with identical schemes are ordered according
             * to the ordering of their scheme-specific parts. </p></li>
             * <li><p> Two opaque URIs with identical schemes and scheme-specific
             * parts are ordered according to the ordering of their
             * fragments. </p></li>
             * <li><p> Two hierarchical URIs with identical schemes are ordered
             * according to the ordering of their authority components: </p>
             * <ul>
             * <li><p> If both authority components are server-based then the URIs
             * are ordered according to their user-information components; if these
             * components are identical then the URIs are ordered according to the
             * ordering of their hosts, without regard to case; if the hosts are
             * identical then the URIs are ordered according to the ordering of
             * their ports. </p></li>
             * <li><p> If one or both authority components are registry-based then
             * the URIs are ordered according to the ordering of their authority
             * components. </p></li>
             * </ul></li>
             * <li><p> Finally, two hierarchical URIs with identical schemes and
             * authority components are ordered according to the ordering of their
             * paths; if their paths are identical then they are ordered according to
             * the ordering of their queries; if the queries are identical then they
             * are ordered according to the order of their fragments. </p></li>
             * </ul>
             * <p> This method satisfies the general contract of the {@link
             * java.lang.Comparable#compareTo(Object) Comparable.compareTo}
             * method. </p>
             */
            // @ts-ignore
            public compareTo(that: java.net.URI): number;
            /**
             * Returns the content of this URI as a string.
             * <p> If this URI was created by invoking one of the constructors in this
             * class then a string equivalent to the original input string, or to the
             * string computed from the originally-given components, as appropriate, is
             * returned.  Otherwise this URI was created by normalization, resolution,
             * or relativization, and so a string is constructed from this URI's
             * components according to the rules specified in <a
             * href="http://www.ietf.org/rfc/rfc2396.txt">RFC&nbsp;2396</a>,
             * section&nbsp;5.2, step&nbsp;7. </p>
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns the content of this URI as a US-ASCII string.
             * <p> If this URI does not contain any characters in the <i>other</i>
             * category then an invocation of this method will return the same value as
             * an invocation of the {@link #toString() toString} method.  Otherwise
             * this method works as if by invoking that method and then <a
             * href="#encode">encoding</a> the result.  </p>
             */
            // @ts-ignore
            public toASCIIString(): string;
        }
    }
}
