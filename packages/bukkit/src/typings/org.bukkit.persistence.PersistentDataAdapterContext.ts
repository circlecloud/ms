declare namespace org {
    namespace bukkit {
        namespace persistence {
            // @ts-ignore
            interface PersistentDataAdapterContext {
                /**
                 * Creates a new and empty meta container instance.
                 */
                 newPersistentDataContainer(): org.bukkit.persistence.PersistentDataContainer;
            }
        }
    }
}
