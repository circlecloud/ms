declare namespace org {
    namespace bukkit {
        namespace metadata {
            class MetadataValue {
                /**
                 * Fetches the value of this metadata item.
                 */
                public value(): any;
                /**
                 * Attempts to convert the value of this metadata item into an int.
                 */
                public asInt(): number;
                /**
                 * Attempts to convert the value of this metadata item into a float.
                 */
                public asFloat(): number;
                /**
                 * Attempts to convert the value of this metadata item into a double.
                 */
                public asDouble(): number;
                /**
                 * Attempts to convert the value of this metadata item into a long.
                 */
                public asLong(): number;
                /**
                 * Attempts to convert the value of this metadata item into a short.
                 */
                public asShort(): number;
                /**
                 * Attempts to convert the value of this metadata item into a byte.
                 */
                public asByte(): number;
                /**
                 * Attempts to convert the value of this metadata item into a boolean.
                 */
                public asBoolean(): boolean;
                /**
                 * Attempts to convert the value of this metadata item into a string.
                 */
                public asString(): string;
                /**
                 * Returns the {@link Plugin} that created this metadata item.
                 */
                public getOwningPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * Invalidates this metadata item, forcing it to recompute when next
                 * accessed.
                 */
                public invalidate(): void;
            }
        }
    }
}
