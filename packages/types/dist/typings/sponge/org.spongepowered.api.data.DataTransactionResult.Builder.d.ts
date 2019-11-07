// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace DataTransactionResult {
                    // @ts-ignore
                     class Builder extends java.lang.Object implements org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets the expectant {@link Type} to the provided
                         * type. A {@link DataTransactionResult} must always have a type to mark
                         * the transaction a "success" or "failure".
                         */
                        // @ts-ignore
                        public result(type: org.spongepowered.api.data.DataTransactionResult.Type): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Adds the provided {@link ImmutableValue} to the {@link List} of
                         * "replaced" {@link ImmutableValue}s. The replaced values are always
                         * copied for every {@link DataTransactionResult} for referencing. It is
                         * also possible to retrieve these replaced {@link ImmutableValue}s to
                         * {@link DataHolder#undo(DataTransactionResult)} at a later point in
                         * the lifespan of the {@link DataHolder}.
                         */
                        // @ts-ignore
                        public replace(value: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Adds the provided {@link ImmutableValue}s to the {@link List} of
                         * "replaced" {@link ImmutableValue}s. The replaced values are always
                         * copied for every {@link DataTransactionResult} for referencing. It is
                         * also possible to retrieve these replaced {@link ImmutableValue}s to
                         * {@link DataHolder#undo(DataTransactionResult)} at a later point in
                         * the lifespan of the {@link DataHolder}.
                         */
                        // @ts-ignore
                        public replace(values: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Adds the provided {@link ImmutableValue} to the {@link List} of
                         * "rejected" {@link ImmutableValue}s. The rejected values are always
                         * copied for every {@link DataTransactionResult} for referencing. It is
                         * also possible to retrieve these rejected {@link ImmutableValue}s to
                         * {@link DataHolder#undo(DataTransactionResult)} at a later point in
                         * the lifespan of the {@link DataHolder}.
                         */
                        // @ts-ignore
                        public reject(value: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Adds the provided {@link ImmutableValue}s to the {@link List} of
                         * "rejected" {@link ImmutableValue}s. The rejected values are always
                         * copied for every {@link DataTransactionResult} for referencing. It is
                         * also possible to retrieve these rejected {@link ImmutableValue}s to
                         * {@link DataHolder#undo(DataTransactionResult)} at a later point in
                         * the lifespan of the {@link DataHolder}.
                         */
                        // @ts-ignore
                        public reject(values: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Adds the provided {@link ImmutableValue} to the {@link List} of
                         * "successful" {@link ImmutableValue}s. The rejected values are always
                         * copied for every {@link DataTransactionResult} for referencing. It is
                         * also possible to retrieve these successful {@link ImmutableValue}s to
                         * {@link DataHolder#undo(DataTransactionResult)} at a later point in
                         * the lifespan of the {@link DataHolder}.
                         */
                        // @ts-ignore
                        public success(value: org.spongepowered.api.data.value.immutable.ImmutableValue): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Adds the provided {@link ImmutableValue}s to the {@link List} of
                         * "successful" {@link ImmutableValue}s. The rejected values are always
                         * copied for every {@link DataTransactionResult} for referencing. It is
                         * also possible to retrieve these successful {@link ImmutableValue}s to
                         * {@link DataHolder#undo(DataTransactionResult)} at a later point in
                         * the lifespan of the {@link DataHolder}.
                         */
                        // @ts-ignore
                        public success(values: java.lang.Iterable): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Combines the currently building {@link DataTransactionResult} with the
                         * one provided. Usually, this means that there is some merging of the
                         * {@link ImmutableValue}s based on {@link Key}. If this builder already
                         * has an {@link ImmutableValue} as being successfully offered, and the
                         * provided result shows the same key as being rejected, the rejected
                         * {@link ImmutableValue} will remain in the final result.
                         */
                        // @ts-ignore
                        public absorbResult(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult.Builder;
                        /**
                         * Builds a new {@link DataTransactionResult} with the providing
                         * {@link List}s of {@link ImmutableValue}s that are successfully
                         * offered, {@link ImmutableValue}s that were replaced, and
                         * {@link ImmutableValue}s that were rejected.
                         */
                        // @ts-ignore
                        public build(): org.spongepowered.api.data.DataTransactionResult;
                        // @ts-ignore
                        public from(value: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.data.DataTransactionResult.Builder;
                        // @ts-ignore
                        public reset(): org.spongepowered.api.data.DataTransactionResult.Builder;
                    }
                }
            }
        }
    }
}
