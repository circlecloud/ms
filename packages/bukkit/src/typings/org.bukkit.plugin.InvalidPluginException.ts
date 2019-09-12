declare namespace org {
    namespace bukkit {
        namespace plugin {
            class InvalidPluginException {
                /**
                 * Constructs a new InvalidPluginException based on the given Exception
                 */
                constructor(cause: any)
                /**
                 * Constructs a new InvalidPluginException
                 */
                constructor()
                /**
                 * Constructs a new InvalidPluginException with the specified detail
                 * message and cause.
                 */
                constructor(message: string, cause: any)
                /**
                 * Constructs a new InvalidPluginException with the specified detail
                 * message
                 */
                constructor(message: string)
            }
        }
    }
}
