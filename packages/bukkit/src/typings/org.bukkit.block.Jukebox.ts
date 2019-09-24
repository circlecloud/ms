declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface Jukebox extends org.bukkit.block.TileState {
                /**
                 * Gets the record inserted into the jukebox.
                 */
                 getPlaying(): org.bukkit.Material;
                /**
                 * Sets the record being played.
                 */
                 setPlaying(record: org.bukkit.Material): void;
                /**
                 * Gets the record item inserted into the jukebox.
                 */
                 getRecord(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the record being played.
                 */
                 setRecord(record: org.bukkit.inventory.ItemStack): void;
                /**
                 * Checks if the jukebox is playing a record.
                 */
                 isPlaying(): boolean;
                /**
                 * Stops the jukebox playing and ejects the current record.
                 * <p>
                 * If the block represented by this state is no longer a jukebox, this will
                 * do nothing and return false.
                 */
                 eject(): boolean;
            }
        }
    }
}
