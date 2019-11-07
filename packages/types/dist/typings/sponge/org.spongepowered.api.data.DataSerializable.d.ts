// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface DataSerializable {
                    /**
                     * Gets the content version of this {@link DataSerializable}. The version
                     * may differ between instances of plugins and implementations such that
                     * the {@link DataView} from {@link #toContainer()} may include different
                     * information, or remove other information as they are no longer deemed
                     * necessary. The version goes hand in hand with {@link DataContentUpdater}
                     * as it is required when there exists any {@link DataView} of this
                     * {@link DataSerializable} with an "older" version.
                     */
                    // @ts-ignore
                     getContentVersion(): number;
                    /**
                     * Serializes this object into a comprehensible {@link DataContainer}.
                     */
                    // @ts-ignore
                     toContainer(): org.spongepowered.api.data.DataContainer;
                }
            }
        }
    }
}
