declare namespace java {
    namespace rmi {
        // @ts-ignore
         class RemoteException extends java.io.IOException {
            /**
             * Constructs a <code>RemoteException</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>RemoteException</code> with the specified
             * detail message.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Constructs a <code>RemoteException</code> with the specified detail
             * message and cause.  This constructor sets the {@link #detail}
             * field to the specified <code>Throwable</code>.
             */
            // @ts-ignore
            constructor(s: string, cause: java.lang.Throwable)
            // @ts-ignore
            public detail: java.lang.Throwable;
            /**
             * Returns the detail message, including the message from the cause, if
             * any, of this exception.
             */
            // @ts-ignore
            public getMessage(): string;
            /**
             * Returns the cause of this exception.  This method returns the value
             * of the {@link #detail} field.
             */
            // @ts-ignore
            public getCause(): java.lang.Throwable;
        }
    }
}
