declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
             class EventException extends java.lang.Exception {
                /**
                 * Constructs a new EventException based on the given Exception
                 */
                // @ts-ignore
                constructor(throwable: java.lang.Throwable)
                /**
                 * Constructs a new EventException
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new EventException with the given message
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable, message: string)
                /**
                 * Constructs a new EventException with the given message
                 */
                // @ts-ignore
                constructor(message: string)
                /**
                 * If applicable, returns the Exception that triggered this Exception
                 */
                // @ts-ignore
                public getCause(): java.lang.Throwable;
            }
        }
    }
}
