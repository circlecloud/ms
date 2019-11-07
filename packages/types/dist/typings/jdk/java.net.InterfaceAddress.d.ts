declare namespace java {
    namespace net {
        // @ts-ignore
         class InterfaceAddress extends java.lang.Object {
            /**
             * Returns an {@code InetAddress} for this address.
             */
            // @ts-ignore
            public getAddress(): java.net.InetAddress;
            /**
             * Returns an {@code InetAddress} for the broadcast address
             * for this InterfaceAddress.
             * <p>
             * Only IPv4 networks have broadcast address therefore, in the case
             * of an IPv6 network, {@code null} will be returned.
             */
            // @ts-ignore
            public getBroadcast(): java.net.InetAddress;
            /**
             * Returns the network prefix length for this address. This is also known
             * as the subnet mask in the context of IPv4 addresses.
             * Typical IPv4 values would be 8 (255.0.0.0), 16 (255.255.0.0)
             * or 24 (255.255.255.0). <p>
             * Typical IPv6 values would be 128 (::1/128) or 10 (fe80::203:baff:fe27:1243/10)
             */
            // @ts-ignore
            public getNetworkPrefixLength(): number;
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same interface address as
             * this object.
             * <p>
             * Two instances of {@code InterfaceAddress} represent the same
             * address if the InetAddress, the prefix length and the broadcast are
             * the same for both.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hashcode for this Interface address.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Converts this Interface address to a {@code String}. The
             * string returned is of the form: InetAddress / prefix length [ broadcast address ].
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
