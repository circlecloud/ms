declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                class CommandMinecart {
                    /**
                     * Gets the command that this CommandMinecart will run when activated.
                     * This will never return null.  If the CommandMinecart does not have a
                     * command, an empty String will be returned instead.
                     */
                    public getCommand(): string;
                    /**
                     * Sets the command that this CommandMinecart will run when activated.
                     * Setting the command to null is the same as setting it to an empty
                     * String.
                     */
                    public setCommand(command: string): void;
                    /**
                     * Sets the name of this CommandMinecart.  The name is used with commands
                     * that this CommandMinecart executes.  Setting the name to null is the
                     * same as setting it to "@".
                     */
                    public setName(name: string): void;
                }
            }
        }
    }
}
