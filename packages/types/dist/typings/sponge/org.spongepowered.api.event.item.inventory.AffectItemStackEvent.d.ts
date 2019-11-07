// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface AffectItemStackEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets a list of the {@link Transaction}s for this event. If a
                             * transaction is requested to be marked as "invalid",
                             * {@link Transaction#setValid(boolean)} can be used.
                             */
                            // @ts-ignore
                             getTransactions(): java.util.List;
                            /**
                             * Applies the provided {@link Predicate} to the {@link List} of
                             * {@link Transaction}s from {@link #getTransactions()} such that
                             * any time that {@link Predicate#test(Object)} returns <code>false</code>
                             * on a {@link Transaction}, the {@link Transaction} is
                             * marked as "invalid" and will not apply post event.
                             * <p>{@link Transaction#getFinal()} is used to construct
                             * the {@link ItemStack} to pass to the predicate</p>
                             */
                            // @ts-ignore
                             filter(predicate: java.util.function$.Predicate): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
