// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace statistic {
                    // @ts-ignore
                    interface ChangeStatisticEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the {@link Statistic}.
                         */
                        // @ts-ignore
                         getStatistic(): org.spongepowered.api.statistic.Statistic;
                        /**
                         * Gets the original value of the statistic.
                         */
                        // @ts-ignore
                         getOriginalValue(): number;
                        /**
                         * Gets the new value of the statistic.
                         */
                        // @ts-ignore
                         getValue(): number;
                        /**
                         * Sets the new value of the statistic to the given value.
                         */
                        // @ts-ignore
                         setValue(value: number): void;
                    }
                }
            }
        }
    }
}
