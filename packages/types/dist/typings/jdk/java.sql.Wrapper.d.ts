declare namespace java {
    namespace sql {
        // @ts-ignore
        interface Wrapper {
            /**
             * Returns an object that implements the given interface to allow access to
             * non-standard methods, or standard methods not exposed by the proxy.
             * If the receiver implements the interface then the result is the receiver
             * or a proxy for the receiver. If the receiver is a wrapper
             * and the wrapped object implements the interface then the result is the
             * wrapped object or a proxy for the wrapped object. Otherwise return the
             * the result of calling <code>unwrap</code> recursively on the wrapped object
             * or a proxy for that result. If the receiver is not a
             * wrapper and does not implement the interface, then an <code>SQLException</code> is thrown.
             */
            // @ts-ignore
             unwrap(iface: java.lang.Class): java.lang.Object;
            /**
             * Returns true if this either implements the interface argument or is directly or indirectly a wrapper
             * for an object that does. Returns false otherwise. If this implements the interface then return true,
             * else if this is a wrapper then return the result of recursively calling <code>isWrapperFor</code> on the wrapped
             * object. If this does not implement the interface and is not a wrapper, return false.
             * This method should be implemented as a low-cost operation compared to <code>unwrap</code> so that
             * callers can use this method to avoid expensive <code>unwrap</code> calls that may fail. If this method
             * returns true then calling <code>unwrap</code> with the same argument should succeed.
             */
            // @ts-ignore
             isWrapperFor(iface: java.lang.Class): boolean;
        }
    }
}
