// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace data {
                    namespace ChangeDataHolderEvent {
                        // @ts-ignore
                        interface ValueChange extends org.spongepowered.api.event.data.ChangeDataHolderEvent {
                            /**
                             * Gets the original {@link DataTransactionResult} of the {@link Value}s
                             * that have changed in this event.
                             */
                            // @ts-ignore
                             getOriginalChanges(): org.spongepowered.api.data.DataTransactionResult;
                            /**
                             * Submits a new {@link DataTransactionResult} as a proposal of various
                             * {@link Value}s to be successfully offered/changed on the original
                             * {@link DataHolder}.
                             * <p>If the proposed {@link DataTransactionResult} provides additional
                             * values that were not changed in the {@link #getOriginalChanges()},
                             * the provided changes suggested to be successfully offered will be
                             * re-offered </p>
                             */
                            // @ts-ignore
                             proposeChanges(result: org.spongepowered.api.data.DataTransactionResult): org.spongepowered.api.event.data.ChangeDataHolderEvent.ValueChange;
                            /**
                             * Gets the ending resulting {@link DataTransactionResult} that will be
                             * offered to the {@link DataHolder}.
                             */
                            // @ts-ignore
                             getEndResult(): org.spongepowered.api.data.DataTransactionResult;
                        }
                    }
                }
            }
        }
    }
}
