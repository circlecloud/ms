declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    // @ts-ignore
                    interface Jukebox extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Attempts to play the currently stored record according to the
                         * {@link RepresentedItemData} of this {@link Jukebox}.
                         */
                        // @ts-ignore
                         playRecord(): void;
                        /**
                         * Stops the currently playing record, if any.
                         */
                        // @ts-ignore
                         stopRecord(): void;
                        /**
                         * Ejects the record item in this Jukebox into the world.
                         */
                        // @ts-ignore
                         ejectRecord(): void;
                        /**
                         * Ejects the current record in this Jukebox and inserts the given one.
                         */
                        // @ts-ignore
                         insertRecord(record: org.spongepowered.api.item.inventory.ItemStack): void;
                    }
                }
            }
        }
    }
}
