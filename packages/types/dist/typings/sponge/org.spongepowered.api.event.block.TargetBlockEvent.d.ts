// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    // @ts-ignore
                    interface TargetBlockEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the target {@link BlockSnapshot} of this {@link Event}.
                         */
                        // @ts-ignore
                         getTargetBlock(): org.spongepowered.api.block.BlockSnapshot;
                    }
                }
            }
        }
    }
}
