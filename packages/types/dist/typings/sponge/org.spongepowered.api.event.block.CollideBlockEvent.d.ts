// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    // @ts-ignore
                    interface CollideBlockEvent extends org.spongepowered.api.event.action.CollideEvent {
                        /**
                         * Gets the target {@link Location} being interacted with.
                         */
                        // @ts-ignore
                         getTargetLocation(): org.spongepowered.api.world.Location;
                        /**
                         * Gets the target {@link BlockState} being interacted with.
                         */
                        // @ts-ignore
                         getTargetBlock(): org.spongepowered.api.block.BlockState;
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
