declare namespace java {
    namespace net {
        // @ts-ignore
         class InetSocketAddress extends java.net.SocketAddress {
            /**
             * Creates a socket address where the IP address is the wildcard address
             * and the port number a specified value.
             * <p>
             * A valid port value is between 0 and 65535.
             * A port number of {@code zero} will let the system pick up an
             * ephemeral port in a {@code bind} operation.
             * <p>
             */
            // @ts-ignore
            constructor(port: number)
            /**
             * Creates a socket address from an IP address and a port number.
             * <p>
             * A valid port value is between 0 and 65535.
             * A port number of {@code zero} will let the system pick up an
             * ephemeral port in a {@code bind} operation.
             * <P>
             * A {@code null} address will assign the <i>wildcard</i> address.
             * <p>
             */
            // @ts-ignore
            constructor(addr: java.net.InetAddress, port: number)
            /**
             * Creates a socket address from a hostname and a port number.
             * <p>
             * An attempt will be made to resolve the hostname into an InetAddress.
             * If that attempt fails, the address will be flagged as <I>unresolved</I>.
             * <p>
             * If there is a security manager, its {@code checkConnect} method
             * is called with the host name as its argument to check the permission
             * to resolve it. This could result in a SecurityException.
             * <P>
             * A valid port value is between 0 and 65535.
             * A port number of {@code zero} will let the system pick up an
             * ephemeral port in a {@code bind} operation.
             * <P>
             */
            // @ts-ignore
            constructor(hostname: string, port: number)
            /**
             * Creates an unresolved socket address from a hostname and a port number.
             * <p>
             * No attempt will be made to resolve the hostname into an InetAddress.
             * The address will be flagged as <I>unresolved</I>.
             * <p>
             * A valid port value is between 0 and 65535.
             * A port number of {@code zero} will let the system pick up an
             * ephemeral port in a {@code bind} operation.
             * <P>
             */
            // @ts-ignore
            public static createUnresolved(host: string, port: number): java.net.InetSocketAddress;
            /**
             * Gets the port number.
             */
            // @ts-ignore
            public getPort(): number;
            /**
             * Gets the {@code InetAddress}.
             */
            // @ts-ignore
            public getAddress(): java.net.InetAddress;
            /**
             * Gets the {@code hostname}.
             * Note: This method may trigger a name service reverse lookup if the
             * address was created with a literal IP address.
             */
            // @ts-ignore
            public getHostName(): string;
            /**
             * Returns the hostname, or the String form of the address if it
             * doesn't have a hostname (it was created using a literal).
             * This has the benefit of <b>not</b> attempting a reverse lookup.
             */
            // @ts-ignore
            public getHostString(): string;
            /**
             * Checks whether the address has been resolved or not.
             */
            // @ts-ignore
            public isUnresolved(): boolean;
            /**
             * Constructs a string representation of this InetSocketAddress.
             * This String is constructed by calling toString() on the InetAddress
             * and concatenating the port number (with a colon). If the address
             * is unresolved then the part before the colon will only contain the hostname.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same address as
             * this object.
             * <p>
             * Two instances of {@code InetSocketAddress} represent the same
             * address if both the InetAddresses (or hostnames if it is unresolved) and port
             * numbers are equal.
             * If both addresses are unresolved, then the hostname and the port number
             * are compared.
             * Note: Hostnames are case insensitive. e.g. "FooBar" and "foobar" are
             * considered equal.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hashcode for this socket address.
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
