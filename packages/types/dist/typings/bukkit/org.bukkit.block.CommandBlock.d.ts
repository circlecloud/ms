// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface CommandBlock extends org.bukkit.block.TileState {
                /**
                 * Gets the command that this CommandBlock will run when powered.
                 * This will never return null.  If the CommandBlock does not have a
                 * command, an empty String will be returned instead.
                 */
                // @ts-ignore
                 getCommand(): string;
                /**
                 * Sets the command that this CommandBlock will run when powered.
                 * Setting the command to null is the same as setting it to an empty
                 * String.
                 */
                // @ts-ignore
                 setCommand(command: string): void;
                /**
                 * Gets the name of this CommandBlock.  The name is used with commands
                 * that this CommandBlock executes.  This name will never be null, and
                 * by default is "@".
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Sets the name of this CommandBlock.  The name is used with commands
                 * that this CommandBlock executes.  Setting the name to null is the
                 * same as setting it to "@".
                 */
                // @ts-ignore
                 setName(name: string): void;
            }
        }
    }
}
