declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    // @ts-ignore
                    interface SleepingEvent extends org.spongepowered.api.event.entity.TargetEntityEvent {
                        /**
                         * Gets the {@link BlockSnapshot} of the bed being used to sleep.
                         */
                        // @ts-ignore
                         getBed(): org.spongepowered.api.block.BlockSnapshot;
                    }
                }
            }
        }
    }
}
