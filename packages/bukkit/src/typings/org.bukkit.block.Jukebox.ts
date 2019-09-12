declare namespace org {
    namespace bukkit {
        namespace block {
            class Jukebox {
                /**
                 * Gets the record inserted into the jukebox.
                 */
                public getPlaying(): org.bukkit.Material;
                /**
                 * Sets the record being played.
                 */
                public setPlaying(record: org.bukkit.Material): void;
                /**
                 * Gets the record item inserted into the jukebox.
                 */
                public getRecord(): org.bukkit.inventory.ItemStack;
                /**
                 * Sets the record being played.
                 */
                public setRecord(record: org.bukkit.inventory.ItemStack): void;
                /**
                 * Checks if the jukebox is playing a record.
                 */
                public isPlaying(): boolean;
                /**
                 * Stops the jukebox playing and ejects the current record.
                 * <p>
                 * If the block represented by this state is no longer a jukebox, this will
                 * do nothing and return false.
                 */
                public eject(): boolean;
            }
        }
    }
}
