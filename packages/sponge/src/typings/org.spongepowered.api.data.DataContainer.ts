declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                interface DataContainer extends org.spongepowered.api.data.DataView {
                    /**
                     * Creates a new {@link DataContainer} with a default
                     * {@link org.spongepowered.api.data.DataView.SafetyMode} of
                     * {@link org.spongepowered.api.data.DataView.SafetyMode#ALL_DATA_CLONED}.
                     */
                    // @ts-ignore
                     createNew(): org.spongepowered.api.data.DataContainer;
                    /**
                     * Creates a new {@link DataContainer} with the provided
                     * {@link org.spongepowered.api.data.DataView.SafetyMode}.
                     */
                    // @ts-ignore
                     createNew(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                     set(path: org.spongepowered.api.data.DataQuery, value: any): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                     set(key: org.spongepowered.api.data.key.Key, value: any): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                     remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataContainer;
                }
            }
        }
    }
}
