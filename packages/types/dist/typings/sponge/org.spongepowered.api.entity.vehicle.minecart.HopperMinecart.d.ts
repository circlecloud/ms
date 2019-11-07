// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        // @ts-ignore
                        interface HopperMinecart extends org.spongepowered.api.entity.vehicle.minecart.ContainerMinecart {
                            /**
                             * Gets a copy of the {@link CooldownData}. The cooldown data represents the
                             * delay before this {@link HopperMinecart} will attempt to transfer an
                             * {@link ItemStack}.
                             */
                            // @ts-ignore
                             getCooldownData(): org.spongepowered.api.data.manipulator.mutable.tileentity.CooldownData;
                        }
                    }
                }
            }
        }
    }
}
