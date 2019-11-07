// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    // @ts-ignore
                    interface InteractBlockEvent extends org.spongepowered.api.event.action.InteractEvent, org.spongepowered.api.event.block.TargetBlockEvent {
                        /**
                         * Gets the target "side" of the {@link BlockState} being interacted with
                         * or {@link Direction#NONE} if not known.
                         */
                        // @ts-ignore
                         getTargetSide(): org.spongepowered.api.util.Direction;
                    }
                }
            }
        }
    }
}
