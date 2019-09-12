declare namespace org {
    namespace bukkit {
        namespace command {
            class CommandException {
                /**
                 * Creates a new instance of <code>CommandException</code> without detail
                 * message.
                 */
                constructor()
                /**
                 * Constructs an instance of <code>CommandException</code> with the
                 * specified detail message.
                 */
                constructor(msg: string)
                constructor(msg: string, cause: any)
            }
        }
    }
}
