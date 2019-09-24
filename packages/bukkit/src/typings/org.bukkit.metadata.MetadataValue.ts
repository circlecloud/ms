declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            interface MetadataValue {
                /**
                 * Fetches the value of this metadata item.
                 */
                 value(): any;
                /**
                 * Attempts to convert the value of this metadata item into an int.
                 */
                 asInt(): number;
                /**
                 * Attempts to convert the value of this metadata item into a float.
                 */
                 asFloat(): number;
                /**
                 * Attempts to convert the value of this metadata item into a double.
                 */
                 asDouble(): number;
                /**
                 * Attempts to convert the value of this metadata item into a long.
                 */
                 asLong(): number;
                /**
                 * Attempts to convert the value of this metadata item into a short.
                 */
                 asShort(): number;
                /**
                 * Attempts to convert the value of this metadata item into a byte.
                 */
                 asByte(): number;
                /**
                 * Attempts to convert the value of this metadata item into a boolean.
                 */
                 asBoolean(): boolean;
                /**
                 * Attempts to convert the value of this metadata item into a string.
                 */
                 asString(): string;
                /**
                 * Returns the {@link Plugin} that created this metadata item.
                 */
                 getOwningPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * Invalidates this metadata item, forcing it to recompute when next
                 * accessed.
                 */
                 invalidate(): void;
            }
        }
    }
}
