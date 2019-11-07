declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface TileState extends org.bukkit.block.BlockState, org.bukkit.persistence.PersistentDataHolder {
                /**
                 * Returns a custom tag container capable of storing tags on the object.
                 * Note that the tags stored on this container are all stored under their
                 * own custom namespace therefore modifying default tags using this
                 * {@link PersistentDataHolder} is impossible.
                 * <p>
                 * This {@link PersistentDataHolder} is only linked to the snapshot instance
                 * stored by the {@link BlockState}.
                 * When storing changes on the {@link PersistentDataHolder}, the updated
                 * content will only be applied to the actual tile entity after one of the
                 * {@link #update()} methods is called.
                 */
                // @ts-ignore
                 getPersistentDataContainer(): org.bukkit.persistence.PersistentDataContainer;
            }
        }
    }
}
