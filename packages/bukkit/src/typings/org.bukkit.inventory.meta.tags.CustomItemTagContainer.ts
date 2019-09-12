declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                namespace tags {
                    class CustomItemTagContainer {
                        /**
                         * Stores a custom value on the {@link ItemMeta}.
                         * This API cannot be used to manipulate minecraft tags, as the values will
                         * be stored using your namespace. This method will override any existing
                         * value the meta may have stored under the provided key.
                         */
                        public setCustomTag(key: org.bukkit.NamespacedKey, type: org.bukkit.inventory.meta.tags.ItemTagType, value: any): void;
                        /**
                         * Returns if the item meta has a custom tag registered matching the
                         * provided parameters.
                         * This method will only return if the found value has the same primitive
                         * data type as the provided key.
                         * Storing a value using a custom {@link ItemTagType} implementation will
                         * not store the complex data type. Therefore storing a UUID (by storing a
                         * byte[]) will match hasCustomTag("key" , {@link ItemTagType#BYTE_ARRAY}).
                         * Likewise a stored byte[] will always match your UUID {@link ItemTagType}
                         * even if it is not 16 bytes long.
                         * This method is only usable for custom object keys. Overwriting existing
                         * tags, like the the display name, will not work as the values are stored
                         * using your namespace.
                         */
                        public hasCustomTag(key: org.bukkit.NamespacedKey, type: org.bukkit.inventory.meta.tags.ItemTagType): boolean;
                        /**
                         * Returns the custom tag's value that is stored on the item.
                         */
                        public getCustomTag(key: org.bukkit.NamespacedKey, type: org.bukkit.inventory.meta.tags.ItemTagType): any;
                        /**
                         * Removes a custom key from the item meta.
                         */
                        public removeCustomTag(key: org.bukkit.NamespacedKey): void;
                        /**
                         * Returns if the container instance is empty, therefore has no entries
                         * inside it.
                         */
                        public isEmpty(): boolean;
                        /**
                         * Returns the adapter context this tag container uses.
                         */
                        public getAdapterContext(): org.bukkit.inventory.meta.tags.ItemTagAdapterContext;
                    }
                }
            }
        }
    }
}
