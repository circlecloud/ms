declare namespace org {
    namespace bukkit {
        namespace configuration {
            class InvalidConfigurationException {
                /**
                 * Creates a new instance of InvalidConfigurationException without a
                 * message or cause.
                 */
                constructor()
                /**
                 * Constructs an instance of InvalidConfigurationException with the
                 * specified message.
                 */
                constructor(msg: string)
                /**
                 * Constructs an instance of InvalidConfigurationException with the
                 * specified cause.
                 */
                constructor(cause: any)
                /**
                 * Constructs an instance of InvalidConfigurationException with the
                 * specified message and cause.
                 */
                constructor(msg: string, cause: any)
            }
        }
    }
}
