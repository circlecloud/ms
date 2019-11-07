// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        // @ts-ignore
                        interface Hopper extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Requests this {@link Hopper} to transfer an item to the next carrier.
                             * <p>Since {@link Hopper}s normally send items to other
                             * {@link TileEntityCarrier}s adjacent to themselves, if there is no
                             * available carrier to send an item to, this will perform nothing.</p>
                             */
                            // @ts-ignore
                             transferItem(): void;
                        }
                    }
                }
            }
        }
    }
}
