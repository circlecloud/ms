// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class DataTransactionResult extends java.lang.Object {
                    /**
                     * Gets a new {@link Builder} to build a new
                     * {@link DataTransactionResult}.
                     */
                    // @ts-ignore
                    public static builder(): org.spongepowered.api.data.DataTransactionResult.Builder;
                    /**
                     * Creates a {@link DataTransactionResult} with no data successfully added,
                     * removed, or rejected, and with the
                     * {@link Type} of
                     * {@link Type#SUCCESS}
                     * result type.
                     */
                    // @ts-ignore
                    public static successNoData(): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a new {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue} being the successful addition. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is
                     * necessary, use {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and any
                     * {@link BaseValue}s should be provided as {@link ImmutableValue}s or
                     * transformed into {@link ImmutableValue}s.
                     */
                    // @ts-ignore
                    public static successResult(value: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a new {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue} being the successful addition. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is
                     * necessary, use {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and any
                     * {@link BaseValue}s should be provided as {@link ImmutableValue}s or
                     * transformed into {@link ImmutableValue}s.
                     */
                    // @ts-ignore
                    public static successReplaceResult(successful: org.spongepowered.api.data.value.immutable.ImmutableValue, replaced: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a new {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue}s being the successful additions and
                     * the provided {@link ImmutableValue}s that were replaced. The result type
                     * is still {@link Type#SUCCESS}. If a {@link Value}
                     * is necessary, use {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and any
                     * {@link BaseValue}s should be provided as {@link ImmutableValue}s or
                     * transformed into {@link ImmutableValue}s.
                     */
                    // @ts-ignore
                    public static successReplaceResult(successful: java.util.Collection, replaced: java.util.Collection): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue}s being successfully removed. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is necessary, use
                     * {@link Value#asImmutable()} to use this method. A {@link DataTransactionResult}
                     * is always immutable once created, and any {@link BaseValue}s should be provided
                     * as {@link ImmutableValue}s or transformed into {@link ImmutableValue}s.
                     */
                    // @ts-ignore
                    public static successRemove(removed: java.util.Collection): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue} being successfully removed. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is necessary, use
                     * {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and a
                     * {@link BaseValue} should be provided as an {@link ImmutableValue} or
                     * transformed into an {@link ImmutableValue}.
                     */
                    // @ts-ignore
                    public static successRemove(removed: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. The
                     * provided {@link ImmutableValue} is considered "rejected" and was not
                     * successfully added.
                     */
                    // @ts-ignore
                    public static failResult(value: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. The
                     * provided {@link ImmutableValue}s are considered "rejected" and were not
                     * successfully added.
                     */
                    // @ts-ignore
                    public static failResult(values: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. There
                     * is no additional data to include.
                     */
                    // @ts-ignore
                    public static failNoData(): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. The
                     * provided {@link ImmutableValue} is considered "incompatible" and was not
                     * successfully added.
                     */
                    // @ts-ignore
                    public static errorResult(value: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult;
                    /**
                     * Gets the type of result.
                     */
                    // @ts-ignore
                    public getType(): org.spongepowered.api.data.DataTransactionResult.Type;
                    /**
                     * Gets whether this {@link DataTransactionResult} was successful or not.
                     */
                    // @ts-ignore
                    public isSuccessful(): boolean;
                    /**
                     * If any {@link BaseValue}s applied onto a {@link CompositeValueStore} were
                     * successful, they'll be stored in the given list.
                     */
                    // @ts-ignore
                    public getSuccessfulData(): java.util.List;
                    /**
                     * If {@link Value}s were supplied to the operation, this
                     * collection will return any {@link ImmutableValue}s which were rejected
                     * by the target {@link DataHolder}.
                     */
                    // @ts-ignore
                    public getRejectedData(): java.util.List;
                    /**
                     * If the operation replaced any {@link Value}s, this returns a collection
                     * of the replaced {@link ImmutableValue}s.
                     */
                    // @ts-ignore
                    public getReplacedData(): java.util.List;
                    /**
                     * If this result of {@link #isSuccessful()} returns {@code true},
                     * the provided {@link Consumer} is called provided a list of all
                     * "successful" data as retrieved from {@link #getSuccessfulData()}.
                     */
                    // @ts-ignore
                    public ifSuccessful(consumer: java.util.function$.Consumer): void;
                    /**
                     * If this result of {@link #isSuccessful()} returns {@code true},
                     * the provided {@link Consumer} is called provided a list of all
                     * "successful" data as retrieved from {@link #getSuccessfulData()}.
                     */
                    // @ts-ignore
                    public ifSucessful(consumer: java.util.function$.Consumer): void;
                    /**
                     * Used to call a {@link Supplier} for an {@link Exception} of type
                     * {@code E} such that if this transaction's {@link #isSuccessful()}
                     * returns {@code false}, the supplier's exception is thrown.
                     */
                    // @ts-ignore
                    public ifNotSuccessful(supplier: java.util.function$.Supplier): void;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                }
            }
        }
    }
}
