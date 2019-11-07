declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                // @ts-ignore
                interface CommandMinecart extends org.bukkit.entity.Minecart {
                    /**
                     * Gets the command that this CommandMinecart will run when activated.
                     * This will never return null.  If the CommandMinecart does not have a
                     * command, an empty String will be returned instead.
                     */
                    // @ts-ignore
                     getCommand(): string;
                    /**
                     * Sets the command that this CommandMinecart will run when activated.
                     * Setting the command to null is the same as setting it to an empty
                     * String.
                     */
                    // @ts-ignore
                     setCommand(command: string): void;
                    /**
                     * Sets the name of this CommandMinecart.  The name is used with commands
                     * that this CommandMinecart executes.  Setting the name to null is the
                     * same as setting it to "@".
                     */
                    // @ts-ignore
                     setName(name: string): void;
                }
            }
        }
    }
}
