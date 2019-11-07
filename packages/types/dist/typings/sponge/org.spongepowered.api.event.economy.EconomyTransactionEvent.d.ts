declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace economy {
                    // @ts-ignore
                    interface EconomyTransactionEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link TransactionResult} for the transaction that occurred.
                         */
                        // @ts-ignore
                         getTransactionResult(): org.spongepowered.api.service.economy.transaction.TransactionResult;
                    }
                }
            }
        }
    }
}
