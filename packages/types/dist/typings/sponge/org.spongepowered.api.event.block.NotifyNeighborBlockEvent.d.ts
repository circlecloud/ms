declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    // @ts-ignore
                    interface NotifyNeighborBlockEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the immutable {@link Map} of {@link Direction} to {@link
                         * BlockState} of the {@link BlockType} that would normally be
                         * notified of changes.
                         */
                        // @ts-ignore
                         getOriginalNeighbors(): java.util.Map;
                        /**
                         * Gets an immutable {@link Map} of {@link Direction} to
                         * {@link BlockState} of the {@link BlockType} that will be notified of
                         * an update. If a {@link Direction} is not required or needing to be
                         * excluded from an update, {@link #filterDirections(Predicate)} will
                         * perform that exclusion.
                         */
                        // @ts-ignore
                         getNeighbors(): java.util.Map;
                        /**
                         * Filters out {@link Direction}s of the {@link BlockState}s to be
                         * marked as "valid" after this event. If the
                         * {@link Predicate#test(Object)} returns <code>false</code>, the
                         * {@link BlockState} is removed from {@link #getNeighbors()} map.
                         */
                        // @ts-ignore
                         filterDirections(predicate: java.util.function$.Predicate): void;
                    }
                }
            }
        }
    }
}
