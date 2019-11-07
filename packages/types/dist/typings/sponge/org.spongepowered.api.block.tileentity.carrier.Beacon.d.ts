// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        // @ts-ignore
                        interface Beacon extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Gets the number of completed levels of valid beacon structure blocks
                             * beneath this beacon.
                             */
                            // @ts-ignore
                             getCompletedLevels(): number;
                            /**
                             * Gets the current {@link BeaconData} for this beacon.
                             */
                            // @ts-ignore
                             getBeaconData(): org.spongepowered.api.data.manipulator.mutable.tileentity.BeaconData;
                            /**
                             * Gets the {@link OptionalValue} for the primary
                             * {@link PotionEffectType}.
                             */
                            // @ts-ignore
                             primaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue;
                            /**
                             * Gets the {@link OptionalValue} for the secondary
                             * {@link PotionEffectType}.
                             */
                            // @ts-ignore
                             secondaryEffect(): org.spongepowered.api.data.value.mutable.OptionalValue;
                        }
                    }
                }
            }
        }
    }
}
