declare namespace java {
    namespace rmi {
        // @ts-ignore
         class Naming extends java.lang.Object {
            /**
             * Returns a reference, a stub, for the remote object associated
             * with the specified <code>name</code>.
             */
            // @ts-ignore
            public static lookup(name: string): java.rmi.Remote;
            /**
             * Binds the specified <code>name</code> to a remote object.
             */
            // @ts-ignore
            public static bind(name: string, obj: java.rmi.Remote): void;
            /**
             * Destroys the binding for the specified name that is associated
             * with a remote object.
             */
            // @ts-ignore
            public static unbind(name: string): void;
            /**
             * Rebinds the specified name to a new remote object. Any existing
             * binding for the name is replaced.
             */
            // @ts-ignore
            public static rebind(name: string, obj: java.rmi.Remote): void;
            /**
             * Returns an array of the names bound in the registry.  The names are
             * URL-formatted (without the scheme component) strings. The array contains
             * a snapshot of the names present in the registry at the time of the
             * call.
             */
            // @ts-ignore
            public static list(name: string): java.lang.String[];
        }
    }
}
