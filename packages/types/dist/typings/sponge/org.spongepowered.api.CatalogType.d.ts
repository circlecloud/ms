// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            // @ts-ignore
            interface CatalogType {
                /**
                 * Gets the unique identifier of this {@link CatalogType}. The identifier is
                 * case insensitive, thus there cannot be another instance with a different
                 * character case. The id of this instance must remain the same for the
                 * entire duration of its existence. The identifier can be formatted however
                 * needed.
                 * <p>A typical id format follows the pattern of <code>`modId:name`</code>
                 * or <code>`minecraft:name`</code>. However the prefix may be omitted for
                 * default/vanilla minecraft types.</p>
                 */
                // @ts-ignore
                 getId(): string;
                /**
                 * Gets the human-readable name of this individual {@link CatalogType}. This
                 * name is not guaranteed to be unique. This value should not be used for
                 * serialization.
                 */
                // @ts-ignore
                 getName(): string;
            }
        }
    }
}
