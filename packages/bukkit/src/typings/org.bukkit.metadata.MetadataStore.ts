declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            interface MetadataStore {
                /**
                 * Adds a metadata value to an object.
                 */
                 setMetadata(subject: any, metadataKey: string, newMetadataValue: org.bukkit.metadata.MetadataValue): void;
                /**
                 * Returns all metadata values attached to an object. If multiple plugins
                 * have attached metadata, each will value will be included.
                 */
                 getMetadata(subject: any, metadataKey: string): any[] /*java.util.List*/;
                /**
                 * Tests to see if a metadata attribute has been set on an object.
                 */
                 hasMetadata(subject: any, metadataKey: string): boolean;
                /**
                 * Removes a metadata item owned by a plugin from a subject.
                 */
                 removeMetadata(subject: any, metadataKey: string, owningPlugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Invalidates all metadata in the metadata store that originates from the
                 * given plugin. Doing this will force each invalidated metadata item to
                 * be recalculated the next time it is accessed.
                 */
                 invalidateAll(owningPlugin: org.bukkit.plugin.Plugin): void;
            }
        }
    }
}
