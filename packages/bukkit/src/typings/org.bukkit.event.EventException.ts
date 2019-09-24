declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
             class EventException {
                /**
                 * Constructs a new EventException based on the given Exception
                 */
                constructor(throwable: any)
                /**
                 * Constructs a new EventException
                 */
                constructor()
                /**
                 * Constructs a new EventException with the given message
                 */
                constructor(cause: any, message: string)
                /**
                 * Constructs a new EventException with the given message
                 */
                constructor(message: string)
                /**
                 * If applicable, returns the Exception that triggered this Exception
                 */
                public getCause(): any;
            }
        }
    }
}
