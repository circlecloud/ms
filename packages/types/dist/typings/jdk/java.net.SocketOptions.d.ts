// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        interface SocketOptions {
            // @ts-ignore
             TCP_NODELAY: number;
            // @ts-ignore
             SO_BINDADDR: number;
            // @ts-ignore
             SO_REUSEADDR: number;
            // @ts-ignore
             SO_BROADCAST: number;
            // @ts-ignore
             IP_MULTICAST_IF: number;
            // @ts-ignore
             IP_MULTICAST_IF2: number;
            // @ts-ignore
             IP_MULTICAST_LOOP: number;
            // @ts-ignore
             IP_TOS: number;
            // @ts-ignore
             SO_LINGER: number;
            // @ts-ignore
             SO_TIMEOUT: number;
            // @ts-ignore
             SO_SNDBUF: number;
            // @ts-ignore
             SO_RCVBUF: number;
            // @ts-ignore
             SO_KEEPALIVE: number;
            // @ts-ignore
             SO_OOBINLINE: number;
            /**
             * Enable/disable the option specified by <I>optID</I>.  If the option
             * is to be enabled, and it takes an option-specific "value",  this is
             * passed in <I>value</I>.  The actual type of value is option-specific,
             * and it is an error to pass something that isn't of the expected type:
             * <BR><PRE>
             * SocketImpl s;
             * ...
             * s.setOption(SO_LINGER, new Integer(10));
             * // OK - set SO_LINGER w/ timeout of 10 sec.
             * s.setOption(SO_LINGER, new Double(10));
             * // ERROR - expects java.lang.Integer
             * </PRE>
             * If the requested option is binary, it can be set using this method by
             * a java.lang.Boolean:
             * <BR><PRE>
             * s.setOption(TCP_NODELAY, new Boolean(true));
             * // OK - enables TCP_NODELAY, a binary option
             * </PRE>
             * <BR>
             * Any option can be disabled using this method with a Boolean(false):
             * <BR><PRE>
             * s.setOption(TCP_NODELAY, new Boolean(false));
             * // OK - disables TCP_NODELAY
             * s.setOption(SO_LINGER, new Boolean(false));
             * // OK - disables SO_LINGER
             * </PRE>
             * <BR>
             * For an option that has a notion of on and off, and requires
             * a non-boolean parameter, setting its value to anything other than
             * <I>Boolean(false)</I> implicitly enables it.
             * <BR>
             * Throws SocketException if the option is unrecognized,
             * the socket is closed, or some low-level error occurred
             * <BR>
             */
            // @ts-ignore
             setOption(optID: number, value: java.lang.Object): void;
            /**
             * Fetch the value of an option.
             * Binary options will return java.lang.Boolean(true)
             * if enabled, java.lang.Boolean(false) if disabled, e.g.:
             * <BR><PRE>
             * SocketImpl s;
             * ...
             * Boolean noDelay = (Boolean)(s.getOption(TCP_NODELAY));
             * if (noDelay.booleanValue()) {
             * // true if TCP_NODELAY is enabled...
             * ...
             * }
             * </PRE>
             * <P>
             * For options that take a particular type as a parameter,
             * getOption(int) will return the parameter's value, else
             * it will return java.lang.Boolean(false):
             * <PRE>
             * Object o = s.getOption(SO_LINGER);
             * if (o instanceof Integer) {
             * System.out.print("Linger time is " + ((Integer)o).intValue());
             * } else {
             * // the true type of o is java.lang.Boolean(false);
             * }
             * </PRE>
             */
            // @ts-ignore
             getOption(optID: number): java.lang.Object;
        }
    }
}
