declare namespace org {
    namespace bukkit {
        namespace persistence {
            class PersistentDataHolder {
                /**
                 * Returns a custom tag container capable of storing tags on the object.
                 * Note that the tags stored on this container are all stored under their
                 * own custom namespace therefore modifying default tags using this
                 * {@link PersistentDataHolder} is impossible.
                 */
                public getPersistentDataContainer(): org.bukkit.persistence.PersistentDataContainer;
            }
        }
    }
}
