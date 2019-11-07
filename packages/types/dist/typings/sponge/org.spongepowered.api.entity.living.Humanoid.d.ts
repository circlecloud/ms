// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    // @ts-ignore
                    interface Humanoid extends org.spongepowered.api.entity.living.Living, org.spongepowered.api.entity.projectile.ProjectileLauncher, org.spongepowered.api.entity.ArmorEquipable, org.spongepowered.api.entity.Tamer {
                        /**
                         * Gets a copy of the current {@link FoodData} for this {@link Humanoid}.
                         */
                        // @ts-ignore
                         getFoodData(): org.spongepowered.api.data.manipulator.mutable.entity.FoodData;
                        /**
                         * Gets the current food level as an {@link MutableBoundedValue}.
                         * <p>Food level has health effects, depending on game difficulty and
                         * hunger levels. If the food level is high enough, the human entity
                         * may heal. If the food level is at 0, the human entity may starve.</p>
                         */
                        // @ts-ignore
                         foodLevel(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        /**
                         * Gets the {@link MutableBoundedValue} for the "exhaustion" level.
                         * <p>When the exhaustion level reaches 0, saturation is usually diminished
                         * such that saturation is decreased and then exhaustion is reset to the
                         * maximum. This type of effect occurs over time and can be modified by
                         * movements and actions performed by the {@link Humanoid} entity.</p>
                         */
                        // @ts-ignore
                         exhaustion(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        /**
                         * Gets the {@link MutableBoundedValue} for the "saturation" level.
                         * <p>When the saturation level reaches 0, the food level is usually
                         * diminished such that the food level is decreased by 1, then
                         * saturation is reset to the maximum value. This type of effect occurs
                         * over time and can be modified by movements and actions performed by the
                         * {@link Humanoid} entity.</p>
                         */
                        // @ts-ignore
                         saturation(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    }
                }
            }
        }
    }
}
