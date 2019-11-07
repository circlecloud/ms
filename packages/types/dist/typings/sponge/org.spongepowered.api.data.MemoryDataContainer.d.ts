declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class MemoryDataContainer extends org.spongepowered.api.data.MemoryDataView implements org.spongepowered.api.data.DataContainer {
                    /**
                     * Creates a new {@link MemoryDataContainer} with a default
                     * {@link org.spongepowered.api.data.DataView.SafetyMode} of
                     * {@link org.spongepowered.api.data.DataView.SafetyMode#ALL_DATA_CLONED}.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new {@link MemoryDataContainer} with the provided
                     * {@link org.spongepowered.api.data.DataView.SafetyMode}.
                     */
                    // @ts-ignore
                    constructor(safety: org.spongepowered.api.data.DataView.SafetyMode)
                    // @ts-ignore
                    public getParent(): java.util.Optional;
                    // @ts-ignore
                    public getContainer(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public set(path: org.spongepowered.api.data.DataQuery, value: java.lang.Object): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public set(key: org.spongepowered.api.data.key.Key, value: java.lang.Object): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataContainer;
                }
            }
        }
    }
}
