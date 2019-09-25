declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace transaction {
                        // @ts-ignore
                        interface TransactionResult {
                            /**
                             * Gets the {@link Account} involved in the transaction.
                             */
                            // @ts-ignore
                             getAccount(): org.spongepowered.api.service.economy.account.Account;
                            /**
                             * Gets the {@link Currency} involved in the transaction.
                             */
                            // @ts-ignore
                             getCurrency(): org.spongepowered.api.service.economy.Currency;
                            /**
                             * Gets the amount of the {@link Currency} involved in the transaction.
                             */
                            // @ts-ignore
                             getAmount(): any;
                            /**
                             * Returns the set of {@link Context}s used to perform the
                             * transaction.
                             */
                            // @ts-ignore
                             getContexts(): any[] /*java.util.Set*/;
                            /**
                             * Gets the {@link ResultType} of this transaction.
                             */
                            // @ts-ignore
                             getResult(): org.spongepowered.api.service.economy.transaction.ResultType;
                            /**
                             * Returns the {@link TransactionType} of this result.
                             */
                            // @ts-ignore
                             getType(): org.spongepowered.api.service.economy.transaction.TransactionType;
                        }
                    }
                }
            }
        }
    }
}
