declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        // @ts-ignore
                        interface Chest extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Returns the inventory representing the combination of this chest
                             * and its neighbor (which form a double chest), if available.
                             * <p>If this chest is not part of a double chest, then this method
                             * will return {@link Optional#empty()}.</p>
                             */
                            // @ts-ignore
                             getDoubleChestInventory(): any;
                            /**
                             * Returns the connected {@link Chest}s, if available.
                             */
                            // @ts-ignore
                             getConnectedChests(): any[] /*java.util.Set*/;
                        }
                    }
                }
            }
        }
    }
}
