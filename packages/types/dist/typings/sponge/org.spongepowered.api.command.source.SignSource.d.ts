// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    // @ts-ignore
                    interface SignSource extends org.spongepowered.api.command.source.ProxySource, org.spongepowered.api.world.Locatable {
                        /**
                         * Gets the sign {@link TileEntity} that this source has been created for.
                         */
                        // @ts-ignore
                         getSign(): org.spongepowered.api.block.tileentity.Sign;
                    }
                }
            }
        }
    }
}
