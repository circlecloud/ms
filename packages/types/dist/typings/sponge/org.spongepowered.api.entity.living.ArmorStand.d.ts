// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    // @ts-ignore
                    interface ArmorStand extends org.spongepowered.api.entity.living.Living, org.spongepowered.api.entity.ArmorEquipable {
                        /**
                         * Gets a copy of the current {@link BodyPartRotationalData} used by this
                         * {@link ArmorStand}.
                         */
                        // @ts-ignore
                         getBodyPartRotationalData(): org.spongepowered.api.data.manipulator.mutable.entity.BodyPartRotationalData;
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} is considered a "marker" stand. If
                         * {@code true}, the armor stand's bounding box is near
                         * impossible to see, and the armor stand can no longer be
                         * interacted with.
                         */
                        // @ts-ignore
                         marker(): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} is considered a "small" armor stand.
                         */
                        // @ts-ignore
                         small(): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} will show that it has a base plate
                         * visible to players.
                         */
                        // @ts-ignore
                         basePlate(): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Gets the {@link Boolean} {@link Value} of whether this
                         * {@link ArmorStand} will show that it has "arms".
                         */
                        // @ts-ignore
                         arms(): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Gets the {@link ArmorStandData} for this armor stand.
                         */
                        // @ts-ignore
                         getArmorStandData(): org.spongepowered.api.data.manipulator.mutable.entity.ArmorStandData;
                        // @ts-ignore
                         placingDisabled(): org.spongepowered.api.data.value.mutable.SetValue;
                        // @ts-ignore
                         takingDisabled(): org.spongepowered.api.data.value.mutable.SetValue;
                        // @ts-ignore
                         getDisabledSlotsData(): org.spongepowered.api.data.manipulator.mutable.entity.DisabledSlotsData;
                    }
                }
            }
        }
    }
}
