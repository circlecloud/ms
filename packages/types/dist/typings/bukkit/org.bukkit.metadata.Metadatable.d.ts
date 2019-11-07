declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            interface Metadatable {
                /**
                 * Sets a metadata value in the implementing object's metadata store.
                 */
                // @ts-ignore
                 setMetadata(metadataKey: string, newMetadataValue: org.bukkit.metadata.MetadataValue): void;
                /**
                 * Returns a list of previously set metadata values from the implementing
                 * object's metadata store.
                 */
                // @ts-ignore
                 getMetadata(metadataKey: string): java.util.List;
                /**
                 * Tests to see whether the implementing object contains the given
                 * metadata value in its metadata store.
                 */
                // @ts-ignore
                 hasMetadata(metadataKey: string): boolean;
                /**
                 * Removes the given metadata value from the implementing object's
                 * metadata store.
                 */
                // @ts-ignore
                 removeMetadata(metadataKey: string, owningPlugin: org.bukkit.plugin.Plugin): void;
            }
        }
    }
}
