declare namespace java {
    namespace net {
        // @ts-ignore
         class SocketPermission extends java.security.Permission {
            /**
             * Creates a new SocketPermission object with the specified actions.
             * The host is expressed as a DNS name, or as a numerical IP address.
             * Optionally, a port or a portrange may be supplied (separated
             * from the DNS name or IP address by a colon).
             * <p>
             * To specify the local machine, use "localhost" as the <i>host</i>.
             * Also note: An empty <i>host</i> String ("") is equivalent to "localhost".
             * <p>
             * The <i>actions</i> parameter contains a comma-separated list of the
             * actions granted for the specified host (and port(s)). Possible actions are
             * "connect", "listen", "accept", "resolve", or
             * any combination of those. "resolve" is automatically added
             * when any of the other three are specified.
             * <p>
             * Examples of SocketPermission instantiation are the following:
             * <pre>
             * nr = new SocketPermission("www.catalog.com", "connect");
             * nr = new SocketPermission("www.sun.com:80", "connect");
             * nr = new SocketPermission("*.sun.com", "connect");
             * nr = new SocketPermission("*.edu", "resolve");
             * nr = new SocketPermission("204.160.241.0", "connect");
             * nr = new SocketPermission("localhost:1024-65535", "listen");
             * nr = new SocketPermission("204.160.241.0:1024-65535", "connect");
             * </pre>
             */
            // @ts-ignore
            constructor(host: string, action: string)
            /**
             * Checks if this socket permission object "implies" the
             * specified permission.
             * <P>
             * More specifically, this method first ensures that all of the following
             * are true (and returns false if any of them are not):
             * <ul>
             * <li> <i>p</i> is an instanceof SocketPermission,
             * <li> <i>p</i>'s actions are a proper subset of this
             * object's actions, and
             * <li> <i>p</i>'s port range is included in this port range. Note:
             * port range is ignored when p only contains the action, 'resolve'.
             * </ul>
             * Then {@code implies} checks each of the following, in order,
             * and for each returns true if the stated condition is true:
             * <ul>
             * <li> If this object was initialized with a single IP address and one of <i>p</i>'s
             * IP addresses is equal to this object's IP address.
             * <li>If this object is a wildcard domain (such as *.sun.com), and
             * <i>p</i>'s canonical name (the name without any preceding *)
             * ends with this object's canonical host name. For example, *.sun.com
             * implies *.eng.sun.com.
             * <li>If this object was not initialized with a single IP address, and one of this
             * object's IP addresses equals one of <i>p</i>'s IP addresses.
             * <li>If this canonical name equals <i>p</i>'s canonical name.
             * </ul>
             * If none of the above are true, {@code implies} returns false.
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean;
            /**
             * Checks two SocketPermission objects for equality.
             * <P>
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the canonical string representation of the actions.
             * Always returns present actions in the following order:
             * connect, listen, accept, resolve.
             */
            // @ts-ignore
            public getActions(): string;
            /**
             * Returns a new PermissionCollection object for storing SocketPermission
             * objects.
             * <p>
             * SocketPermission objects must be stored in a manner that allows them
             * to be inserted into the collection in any order, but that also enables the
             * PermissionCollection {@code implies}
             * method to be implemented in an efficient (and consistent) manner.
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection;
        }
    }
}
