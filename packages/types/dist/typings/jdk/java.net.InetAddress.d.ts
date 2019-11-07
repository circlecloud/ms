// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class InetAddress extends java.lang.Object {
            /**
             * Utility routine to check if the InetAddress is an
             * IP multicast address.
             */
            // @ts-ignore
            public isMulticastAddress(): boolean;
            /**
             * Utility routine to check if the InetAddress in a wildcard address.
             */
            // @ts-ignore
            public isAnyLocalAddress(): boolean;
            /**
             * Utility routine to check if the InetAddress is a loopback address.
             */
            // @ts-ignore
            public isLoopbackAddress(): boolean;
            /**
             * Utility routine to check if the InetAddress is an link local address.
             */
            // @ts-ignore
            public isLinkLocalAddress(): boolean;
            /**
             * Utility routine to check if the InetAddress is a site local address.
             */
            // @ts-ignore
            public isSiteLocalAddress(): boolean;
            /**
             * Utility routine to check if the multicast address has global scope.
             */
            // @ts-ignore
            public isMCGlobal(): boolean;
            /**
             * Utility routine to check if the multicast address has node scope.
             */
            // @ts-ignore
            public isMCNodeLocal(): boolean;
            /**
             * Utility routine to check if the multicast address has link scope.
             */
            // @ts-ignore
            public isMCLinkLocal(): boolean;
            /**
             * Utility routine to check if the multicast address has site scope.
             */
            // @ts-ignore
            public isMCSiteLocal(): boolean;
            /**
             * Utility routine to check if the multicast address has organization scope.
             */
            // @ts-ignore
            public isMCOrgLocal(): boolean;
            /**
             * Test whether that address is reachable. Best effort is made by the
             * implementation to try to reach the host, but firewalls and server
             * configuration may block requests resulting in a unreachable status
             * while some specific ports may be accessible.
             * A typical implementation will use ICMP ECHO REQUESTs if the
             * privilege can be obtained, otherwise it will try to establish
             * a TCP connection on port 7 (Echo) of the destination host.
             * <p>
             * The timeout value, in milliseconds, indicates the maximum amount of time
             * the try should take. If the operation times out before getting an
             * answer, the host is deemed unreachable. A negative value will result
             * in an IllegalArgumentException being thrown.
             */
            // @ts-ignore
            public isReachable(timeout: number): boolean;
            /**
             * Test whether that address is reachable. Best effort is made by the
             * implementation to try to reach the host, but firewalls and server
             * configuration may block requests resulting in a unreachable status
             * while some specific ports may be accessible.
             * A typical implementation will use ICMP ECHO REQUESTs if the
             * privilege can be obtained, otherwise it will try to establish
             * a TCP connection on port 7 (Echo) of the destination host.
             * <p>
             * The {@code network interface} and {@code ttl} parameters
             * let the caller specify which network interface the test will go through
             * and the maximum number of hops the packets should go through.
             * A negative value for the {@code ttl} will result in an
             * IllegalArgumentException being thrown.
             * <p>
             * The timeout value, in milliseconds, indicates the maximum amount of time
             * the try should take. If the operation times out before getting an
             * answer, the host is deemed unreachable. A negative value will result
             * in an IllegalArgumentException being thrown.
             */
            // @ts-ignore
            public isReachable(netif: java.net.NetworkInterface, ttl: number, timeout: number): boolean;
            /**
             * Gets the host name for this IP address.
             * <p>If this InetAddress was created with a host name,
             * this host name will be remembered and returned;
             * otherwise, a reverse name lookup will be performed
             * and the result will be returned based on the system
             * configured name lookup service. If a lookup of the name service
             * is required, call
             * {@link #getCanonicalHostName() getCanonicalHostName}.
             * <p>If there is a security manager, its
             * {@code checkConnect} method is first called
             * with the hostname and {@code -1}
             * as its arguments to see if the operation is allowed.
             * If the operation is not allowed, it will return
             * the textual representation of the IP address.
             */
            // @ts-ignore
            public getHostName(): string;
            /**
             * Gets the fully qualified domain name for this IP address.
             * Best effort method, meaning we may not be able to return
             * the FQDN depending on the underlying system configuration.
             * <p>If there is a security manager, this method first
             * calls its {@code checkConnect} method
             * with the hostname and {@code -1}
             * as its arguments to see if the calling code is allowed to know
             * the hostname for this IP address, i.e., to connect to the host.
             * If the operation is not allowed, it will return
             * the textual representation of the IP address.
             */
            // @ts-ignore
            public getCanonicalHostName(): string;
            /**
             * Returns the raw IP address of this {@code InetAddress}
             * object. The result is in network byte order: the highest order
             * byte of the address is in {@code getAddress()[0]}.
             */
            // @ts-ignore
            public getAddress(): number[];
            /**
             * Returns the IP address string in textual presentation.
             */
            // @ts-ignore
            public getHostAddress(): string;
            /**
             * Returns a hashcode for this IP address.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same IP address as
             * this object.
             * <p>
             * Two instances of {@code InetAddress} represent the same IP
             * address if the length of the byte arrays returned by
             * {@code getAddress} is the same for both, and each of the
             * array components is the same for the byte arrays.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Converts this IP address to a {@code String}. The
             * string returned is of the form: hostname / literal IP
             * address.
             * If the host name is unresolved, no reverse name service lookup
             * is performed. The hostname part will be represented by an empty string.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Creates an InetAddress based on the provided host name and IP address.
             * No name service is checked for the validity of the address.
             * <p> The host name can either be a machine name, such as
             * "{@code java.sun.com}", or a textual representation of its IP
             * address.
             * <p> No validity checking is done on the host name either.
             * <p> If addr specifies an IPv4 address an instance of Inet4Address
             * will be returned; otherwise, an instance of Inet6Address
             * will be returned.
             * <p> IPv4 address byte array must be 4 bytes long and IPv6 byte array
             * must be 16 bytes long
             */
            // @ts-ignore
            public static getByAddress(host: string, addr: number): java.net.InetAddress;
            /**
             * Determines the IP address of a host, given the host's name.
             * <p> The host name can either be a machine name, such as
             * "{@code java.sun.com}", or a textual representation of its
             * IP address. If a literal IP address is supplied, only the
             * validity of the address format is checked.
             * <p> For {@code host} specified in literal IPv6 address,
             * either the form defined in RFC 2732 or the literal IPv6 address
             * format defined in RFC 2373 is accepted. IPv6 scoped addresses are also
             * supported. See <a href="Inet6Address.html#scoped">here</a> for a description of IPv6
             * scoped addresses.
             * <p> If the host is {@code null} then an {@code InetAddress}
             * representing an address of the loopback interface is returned.
             * See <a href="http://www.ietf.org/rfc/rfc3330.txt">RFC&nbsp;3330</a>
             * section&nbsp;2 and <a href="http://www.ietf.org/rfc/rfc2373.txt">RFC&nbsp;2373</a>
             * section&nbsp;2.5.3. </p>
             */
            // @ts-ignore
            public static getByName(host: string): java.net.InetAddress;
            /**
             * Given the name of a host, returns an array of its IP addresses,
             * based on the configured name service on the system.
             * <p> The host name can either be a machine name, such as
             * "{@code java.sun.com}", or a textual representation of its IP
             * address. If a literal IP address is supplied, only the
             * validity of the address format is checked.
             * <p> For {@code host} specified in <i>literal IPv6 address</i>,
             * either the form defined in RFC 2732 or the literal IPv6 address
             * format defined in RFC 2373 is accepted. A literal IPv6 address may
             * also be qualified by appending a scoped zone identifier or scope_id.
             * The syntax and usage of scope_ids is described
             * <a href="Inet6Address.html#scoped">here</a>.
             * <p> If the host is {@code null} then an {@code InetAddress}
             * representing an address of the loopback interface is returned.
             * See <a href="http://www.ietf.org/rfc/rfc3330.txt">RFC&nbsp;3330</a>
             * section&nbsp;2 and <a href="http://www.ietf.org/rfc/rfc2373.txt">RFC&nbsp;2373</a>
             * section&nbsp;2.5.3. </p>
             * <p> If there is a security manager and {@code host} is not
             * null and {@code host.length() } is not equal to zero, the
             * security manager's
             * {@code checkConnect} method is called
             * with the hostname and {@code -1}
             * as its arguments to see if the operation is allowed.
             */
            // @ts-ignore
            public static getAllByName(host: string): java.net.InetAddress[];
            /**
             * Returns the loopback address.
             * <p>
             * The InetAddress returned will represent the IPv4
             * loopback address, 127.0.0.1, or the IPv6 loopback
             * address, ::1. The IPv4 loopback address returned
             * is only one of many in the form 127.*.*.*
             */
            // @ts-ignore
            public static getLoopbackAddress(): java.net.InetAddress;
            /**
             * Returns an {@code InetAddress} object given the raw IP address .
             * The argument is in network byte order: the highest order
             * byte of the address is in {@code getAddress()[0]}.
             * <p> This method doesn't block, i.e. no reverse name service lookup
             * is performed.
             * <p> IPv4 address byte array must be 4 bytes long and IPv6 byte array
             * must be 16 bytes long
             */
            // @ts-ignore
            public static getByAddress(addr: number): java.net.InetAddress;
            /**
             * Returns the address of the local host. This is achieved by retrieving
             * the name of the host from the system, then resolving that name into
             * an {@code InetAddress}.
             * <P>Note: The resolved address may be cached for a short period of time.
             * </P>
             * <p>If there is a security manager, its
             * {@code checkConnect} method is called
             * with the local host name and {@code -1}
             * as its arguments to see if the operation is allowed.
             * If the operation is not allowed, an InetAddress representing
             * the loopback address is returned.
             */
            // @ts-ignore
            public static getLocalHost(): java.net.InetAddress;
        }
    }
}
