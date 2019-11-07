declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            abstract class MetadataStoreBase extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Adds a metadata value to an object. Each metadata value is owned by a
                 * specific {@link Plugin}. If a plugin has already added a metadata value
                 * to an object, that value will be replaced with the value of {@code
                 * newMetadataValue}. Multiple plugins can set independent values for the
                 * same {@code metadataKey} without conflict.
                 * <p>
                 * Implementation note: I considered using a {@link
                 * java.util.concurrent.locks.ReadWriteLock} for controlling access to
                 * {@code metadataMap}, but decided that the added overhead wasn't worth
                 * the finer grained access control.
                 * <p>
                 * Bukkit is almost entirely single threaded so locking overhead shouldn't
                 * pose a problem.
                 */
                // @ts-ignore
                public setMetadata(subject: java.lang.Object, metadataKey: string, newMetadataValue: org.bukkit.metadata.MetadataValue): void;
                /**
                 * Returns all metadata values attached to an object. If multiple
                 * have attached metadata, each will value will be included.
                 */
                // @ts-ignore
                public getMetadata(subject: java.lang.Object, metadataKey: string): java.util.List;
                /**
                 * Tests to see if a metadata attribute has been set on an object.
                 */
                // @ts-ignore
                public hasMetadata(subject: java.lang.Object, metadataKey: string): boolean;
                /**
                 * Removes a metadata item owned by a plugin from a subject.
                 */
                // @ts-ignore
                public removeMetadata(subject: java.lang.Object, metadataKey: string, owningPlugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Invalidates all metadata in the metadata store that originates from the
                 * given plugin. Doing this will force each invalidated metadata item to
                 * be recalculated the next time it is accessed.
                 */
                // @ts-ignore
                public invalidateAll(owningPlugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Creates a unique name for the object receiving metadata by combining
                 * unique data from the subject with a metadataKey.
                 * <p>
                 * The name created must be globally unique for the given object and any
                 * two equivalent objects must generate the same unique name. For example,
                 * two Player objects must generate the same string if they represent the
                 * same player, even if the objects would fail a reference equality test.
                 */
                // @ts-ignore
                protected abstract disambiguate(subject: java.lang.Object, metadataKey: string): string;
            }
        }
    }
}
