declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class Transaction extends java.lang.Object implements org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a new transaction.
                     */
                    // @ts-ignore
                    constructor(original: org.spongepowered.api.data.DataSerializable, defaultReplacement: org.spongepowered.api.data.DataSerializable)
                    /**
                     * Creates a new {@link Transaction} with the added possibility of
                     * <i>intermediary</i> transactions that may have taken place between
                     * what is {@link #getOriginal() original} and {@link #getDefault()
                     * the default result}. The list may be {@code null}, however the list
                     * will wrapped to become an unmodifiable list.
                     * <p>It is imperative that the provided list is not to be modified
                     * outside this created {@link Transaction} synchronously and
                     * asynchronously as consumers of the provided list will not be able
                     * to react accordingly.</p>
                     */
                    // @ts-ignore
                    constructor(original: org.spongepowered.api.data.DataSerializable, defaultReplacement: org.spongepowered.api.data.DataSerializable, intermediary: java.util.List)
                    /**
                     * Gets the original snapshot.
                     */
                    // @ts-ignore
                    public getOriginal(): org.spongepowered.api.data.DataSerializable;
                    /**
                     * Gets the default replacement snapshot.
                     */
                    // @ts-ignore
                    public getDefault(): org.spongepowered.api.data.DataSerializable;
                    /**
                     * Gets a {@link List} of any and all intermediary transactions that may
                     * have taken place to get the final {@link Transaction} of
                     * {@link #getOriginal() the original} and {@link #getDefault() the default}
                     * results. This is exposed for monitoring purposes only, as the provided
                     * list is not modifiable. The list may be {@link List#isEmpty() empty}
                     * by default, but will never be {@code null}.
                     * <p>Note that special processing with this list may sometimes only take
                     * place if {@link #getCustom() a custom} result has not been set by a plugin,
                     * or if {@link #isValid()} returns {@code false}.</p>
                     */
                    // @ts-ignore
                    public getIntermediary(): java.util.List;
                    /**
                     * Gets the custom snapshot if one was set.
                     */
                    // @ts-ignore
                    public getCustom(): java.util.Optional;
                    /**
                     * Sets the custom snapshot. If setting <code>null</code>, this will
                     * reset to use the {@link #getDefault()} snapshot.
                     */
                    // @ts-ignore
                    public setCustom(custom: org.spongepowered.api.data.DataSerializable): void;
                    /**
                     * Gets the proposed final snapshot, if the {@link #getCustom()} returns
                     * {@link Optional#isPresent()}, the custom is returned, otherwise,
                     * {@link #getDefault()} is returned.
                     */
                    // @ts-ignore
                    public getFinal(): org.spongepowered.api.data.DataSerializable;
                    /**
                     * Gets whether this transaction is marked as valid.
                     */
                    // @ts-ignore
                    public isValid(): boolean;
                    /**
                     * Sets whether this transaction is valid or not.
                     */
                    // @ts-ignore
                    public setValid(valid: boolean): void;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public getContentVersion(): number;
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer;
                }
            }
        }
    }
}
