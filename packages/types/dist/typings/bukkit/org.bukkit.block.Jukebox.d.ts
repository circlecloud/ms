// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Jukebox extends org.bukkit.block.TileState {
                /**
                 * Gets the record inserted into the jukebox.
                 */
                // @ts-ignore
                 getPlaying(): org.bukkit.Material;
                /**
                 * Sets the record being played.
                 */
                // @ts-ignore
                 setPlaying(record: org.bukkit.Material): void;
                /**
                 * Gets the record item inserted into the jukebox.
                 */
                // @ts-ignore
                 getRecord(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the record being played.
                 */
                // @ts-ignore
                 setRecord(record: org.bukkit.inventory.ItemStack): void;
                /**
                 * Checks if the jukebox is playing a record.
                 */
                // @ts-ignore
                 isPlaying(): boolean;
                /**
                 * Stops the jukebox playing and ejects the current record.
                 * <p>
                 * If the block represented by this state is no longer a jukebox, this will
                 * do nothing and return false.
                 */
                // @ts-ignore
                 eject(): boolean;
            }
        }
    }
}
