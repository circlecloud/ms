// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    // @ts-ignore
                    interface FluidType extends org.spongepowered.api.CatalogType, org.spongepowered.api.data.property.PropertyHolder {
                        /**
                         * Gets the {@link BlockType} that normally would represent this fluid
                         * type if it exists as a block in the world.
                         */
                        // @ts-ignore
                         getBlockTypeBase(): java.util.Optional;
                    }
                }
            }
        }
    }
}
