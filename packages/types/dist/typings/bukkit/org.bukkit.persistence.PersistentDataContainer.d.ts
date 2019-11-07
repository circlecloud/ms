declare namespace org {
    namespace bukkit {
        namespace persistence {
            // @ts-ignore
            interface PersistentDataContainer {
                /**
                 * Stores a metadata value on the {@link PersistentDataHolder} instance.
                 * <p>
                 * This API cannot be used to manipulate minecraft data, as the values will
                 * be stored using your namespace. This method will override any existing
                 * value the {@link PersistentDataHolder} may have stored under the provided
                 * key.
                 */
                // @ts-ignore
                 set(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType, value: java.lang.Object): void;
                /**
                 * Returns if the persistent metadata provider has metadata registered
                 * matching the provided parameters.
                 * <p>
                 * This method will only return if the found value has the same primitive
                 * data type as the provided key.
                 * <p>
                 * Storing a value using a custom {@link PersistentDataType} implementation
                 * will not store the complex data type. Therefore storing a UUID (by
                 * storing a byte[]) will match has("key" ,
                 * {@link PersistentDataType#BYTE_ARRAY}). Likewise a stored byte[] will
                 * always match your UUID {@link PersistentDataType} even if it is not 16
                 * bytes long.
                 * <p>
                 * This method is only usable for custom object keys. Overwriting existing
                 * tags, like the the display name, will not work as the values are stored
                 * using your namespace.
                 */
                // @ts-ignore
                 has(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType): boolean;
                /**
                 * Returns the metadata value that is stored on the
                 * {@link PersistentDataHolder} instance.
                 */
                // @ts-ignore
                 get(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType): java.lang.Object;
                /**
                 * Returns the metadata value that is stored on the
                 * {@link PersistentDataHolder} instance. If the value does not exist in the
                 * container, the default value provided is returned.
                 */
                // @ts-ignore
                 getOrDefault(key: org.bukkit.NamespacedKey, type: org.bukkit.persistence.PersistentDataType, defaultValue: java.lang.Object): java.lang.Object;
                /**
                 * Removes a custom key from the {@link PersistentDataHolder} instance.
                 */
                // @ts-ignore
                 remove(key: org.bukkit.NamespacedKey): void;
                /**
                 * Returns if the container instance is empty, therefore has no entries
                 * inside it.
                 */
                // @ts-ignore
                 isEmpty(): boolean;
                /**
                 * Returns the adapter context this tag container uses.
                 */
                // @ts-ignore
                 getAdapterContext(): org.bukkit.persistence.PersistentDataAdapterContext;
            }
        }
    }
}
