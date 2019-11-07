// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            interface MetadataValue {
                /**
                 * Fetches the value of this metadata item.
                 */
                // @ts-ignore
                 value(): java.lang.Object;
                /**
                 * Attempts to convert the value of this metadata item into an int.
                 */
                // @ts-ignore
                 asInt(): number;
                /**
                 * Attempts to convert the value of this metadata item into a float.
                 */
                // @ts-ignore
                 asFloat(): number;
                /**
                 * Attempts to convert the value of this metadata item into a double.
                 */
                // @ts-ignore
                 asDouble(): number;
                /**
                 * Attempts to convert the value of this metadata item into a long.
                 */
                // @ts-ignore
                 asLong(): number;
                /**
                 * Attempts to convert the value of this metadata item into a short.
                 */
                // @ts-ignore
                 asShort(): number;
                /**
                 * Attempts to convert the value of this metadata item into a byte.
                 */
                // @ts-ignore
                 asByte(): number;
                /**
                 * Attempts to convert the value of this metadata item into a boolean.
                 */
                // @ts-ignore
                 asBoolean(): boolean;
                /**
                 * Attempts to convert the value of this metadata item into a string.
                 */
                // @ts-ignore
                 asString(): string;
                /**
                 * Returns the {@link Plugin} that created this metadata item.
                 */
                // @ts-ignore
                 getOwningPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * Invalidates this metadata item, forcing it to recompute when next
                 * accessed.
                 */
                // @ts-ignore
                 invalidate(): void;
            }
        }
    }
}
