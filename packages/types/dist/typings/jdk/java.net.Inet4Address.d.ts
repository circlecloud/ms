// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
         class Inet4Address extends java.net.InetAddress {
            /**
             * Utility routine to check if the InetAddress is an
             * IP multicast address. IP multicast address is a Class D
             * address i.e first four bits of the address are 1110.
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
             * Returns the raw IP address of this {@code InetAddress}
             * object. The result is in network byte order: the highest order
             * byte of the address is in {@code getAddress()[0]}.
             */
            // @ts-ignore
            public getAddress(): number[];
            /**
             * Returns the IP address string in textual presentation form.
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
        }
    }
}
