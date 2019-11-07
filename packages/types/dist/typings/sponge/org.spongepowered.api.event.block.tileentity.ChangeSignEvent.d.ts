// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        // @ts-ignore
                        interface ChangeSignEvent extends org.spongepowered.api.event.block.tileentity.TargetTileEntityEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the target {@link Sign} being changed.
                             */
                            // @ts-ignore
                             getTargetTile(): org.spongepowered.api.block.tileentity.Sign;
                            /**
                             * Gets the original {@link ImmutableSignData} before event changes.
                             */
                            // @ts-ignore
                             getOriginalText(): org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableSignData;
                            /**
                             * Gets the {@link SignData} to be applied to the {@link Sign} after event resolution.
                             */
                            // @ts-ignore
                             getText(): org.spongepowered.api.data.manipulator.mutable.tileentity.SignData;
                        }
                    }
                }
            }
        }
    }
}
