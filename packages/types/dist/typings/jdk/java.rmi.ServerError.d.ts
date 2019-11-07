declare namespace java {
    namespace rmi {
        // @ts-ignore
         class ServerError extends java.rmi.RemoteException {
            /**
             * Constructs a <code>ServerError</code> with the specified
             * detail message and nested error.
             */
            // @ts-ignore
            constructor(s: string, err: java.lang.Error)
        }
    }
}
