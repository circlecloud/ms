// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class Inet6Address extends java.net.InetAddress {
            /**
             * Create an Inet6Address in the exact manner of {@link
             * InetAddress#getByAddress(String,byte[])} except that the IPv6 scope_id is
             * set to the value corresponding to the given interface for the address
             * type specified in {@code addr}. The call will fail with an
             * UnknownHostException if the given interface does not have a numeric
             * scope_id assigned for the given address type (eg. link-local or site-local).
             * See <a href="Inet6Address.html#scoped">here</a> for a description of IPv6
             * scoped addresses.
             */
            // @ts-ignore
            public static getByAddress(host: string, addr: number, nif: java.net.NetworkInterface): java.net.Inet6Address;
            /**
             * Create an Inet6Address in the exact manner of {@link
             * InetAddress#getByAddress(String,byte[])} except that the IPv6 scope_id is
             * set to the given numeric value. The scope_id is not checked to determine
             * if it corresponds to any interface on the system.
             * See <a href="Inet6Address.html#scoped">here</a> for a description of IPv6
             * scoped addresses.
             */
            // @ts-ignore
            public static getByAddress(host: string, addr: number, scope_id: number): java.net.Inet6Address;
            /**
             * Utility routine to check if the InetAddress is an IP multicast
             * address. 11111111 at the start of the address identifies the
             * address as being a multicast address.
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
             * Returns the raw IP address of this {@code InetAddress} object. The result
             * is in network byte order: the highest order byte of the address is in
             * {@code getAddress()[0]}.
             */
            // @ts-ignore
            public getAddress(): number[];
            /**
             * Returns the numeric scopeId, if this instance is associated with
             * an interface. If no scoped_id is set, the returned value is zero.
             */
            // @ts-ignore
            public getScopeId(): number;
            /**
             * Returns the scoped interface, if this instance was created with
             * with a scoped interface.
             */
            // @ts-ignore
            public getScopedInterface(): java.net.NetworkInterface;
            /**
             * Returns the IP address string in textual presentation. If the instance
             * was created specifying a scope identifier then the scope id is appended
             * to the IP address preceded by a "%" (per-cent) character. This can be
             * either a numeric value or a string, depending on which was used to create
             * the instance.
             */
            // @ts-ignore
            public getHostAddress(): string;
            /**
             * Returns a hashcode for this IP address.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares this object against the specified object. The result is {@code
             * true} if and only if the argument is not {@code null} and it represents
             * the same IP address as this object.
             * <p> Two instances of {@code InetAddress} represent the same IP address
             * if the length of the byte arrays returned by {@code getAddress} is the
             * same for both, and each of the array components is the same for the byte
             * arrays.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Utility routine to check if the InetAddress is an
             * IPv4 compatible IPv6 address.
             */
            // @ts-ignore
            public isIPv4CompatibleAddress(): boolean;
        }
    }
}
