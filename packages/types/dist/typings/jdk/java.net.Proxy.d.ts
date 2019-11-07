declare namespace java {
    namespace net {
        // @ts-ignore
         class Proxy extends java.lang.Object {
            /**
             * Creates an entry representing a PROXY connection.
             * Certain combinations are illegal. For instance, for types Http, and
             * Socks, a SocketAddress <b>must</b> be provided.
             * <P>
             * Use the {@code Proxy.NO_PROXY} constant
             * for representing a direct connection.
             */
            // @ts-ignore
            constructor(type: java.net.Proxy.Type, sa: java.net.SocketAddress)
            // @ts-ignore
            public static NO_PROXY: java.net.Proxy;
            /**
             * Returns the proxy type.
             */
            // @ts-ignore
            public type(): java.net.Proxy.Type;
            /**
             * Returns the socket address of the proxy, or
             * {@code null} if its a direct connection.
             */
            // @ts-ignore
            public address(): java.net.SocketAddress;
            /**
             * Constructs a string representation of this Proxy.
             * This String is constructed by calling toString() on its type
             * and concatenating " @ " and the toString() result from its address
             * if its type is not {@code DIRECT}.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Compares this object against the specified object.
             * The result is {@code true} if and only if the argument is
             * not {@code null} and it represents the same proxy as
             * this object.
             * <p>
             * Two instances of {@code Proxy} represent the same
             * address if both the SocketAddresses and type are equal.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hashcode for this Proxy.
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
