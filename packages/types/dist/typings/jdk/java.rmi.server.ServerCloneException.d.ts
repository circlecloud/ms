// @ts-nocheck
declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
             class ServerCloneException extends java.lang.CloneNotSupportedException {
                /**
                 * Constructs a <code>ServerCloneException</code> with the specified
                 * detail message.
                 */
                // @ts-ignore
                constructor(s: string)
                /**
                 * Constructs a <code>ServerCloneException</code> with the specified
                 * detail message and cause.
                 */
                // @ts-ignore
                constructor(s: string, cause: java.lang.Exception)
                // @ts-ignore
                public detail: java.lang.Exception;
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
}
