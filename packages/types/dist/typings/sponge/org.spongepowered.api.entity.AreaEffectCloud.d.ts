// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface AreaEffectCloud extends org.spongepowered.api.entity.Entity {
                    /**
                     * Gets the {@link AreaEffectCloudData} for this cloud.
                     */
                    // @ts-ignore
                     getAreaEffectCloudData(): org.spongepowered.api.data.manipulator.mutable.entity.AreaEffectCloudData;
                    /**
                     * Gets the {@link Color} of this cloud, can be changed.
                     */
                    // @ts-ignore
                     color(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets the {@code radius} value of this cloud.
                     */
                    // @ts-ignore
                     radius(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    /**
                     * Gets the {@link ParticleType} of this cloud.
                     */
                    // @ts-ignore
                     particleType(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets the bounded {@code duration} value of this cloud.
                     */
                    // @ts-ignore
                     duration(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    /**
                     * Gets the bounded {@code waitTime} value of this cloud. The wait time
                     * dictates how long until this cloud will affect {@link Entity} instances
                     * with {@link PotionEffect}s.
                     */
                    // @ts-ignore
                     waitTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    /**
                     * Gets the bounded {@code radiusOnUse} value of this cloud. The radius is
                     * reduced per {@link Entity} affected. Once the radius is {@code 0}, the
                     * cloud dissipates.
                     */
                    // @ts-ignore
                     radiusOnUse(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    /**
                     * Gets the bounded {@code radiusPerTick} value of this cloud. The radius is
                     * reduced per tick (so technically can be set to {@code 0} to have it
                     * remain permanent until it's effects have been used up.
                     */
                    // @ts-ignore
                     radiusPerTick(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    /**
                     * Gets the bounded {@code durationOnUse} value of this cloud. The duration
                     * on use is reduced for every time that this cloud applies its
                     * {@link PotionEffect}s on an {@link Entity}.
                     */
                    // @ts-ignore
                     durationOnUse(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    /**
                     * Gets the bounded {@code applicationDelay} value of this cloud. What this
                     * means is the application delay between times of application on an
                     * {@link Entity}.
                     */
                    // @ts-ignore
                     applicationDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                    /**
                     * Gets the {@link ListValue} of {@link PotionEffect}s of this cloud. The
                     * potion effects will affect any {@link Entity} according to the various
                     * delays and ticks remaining of this cloud.
                     */
                    // @ts-ignore
                     effects(): org.spongepowered.api.data.value.mutable.ListValue;
                    /**
                     * Gets the bounded {@code age} value of this cloud.
                     */
                    // @ts-ignore
                     age(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                }
            }
        }
    }
}
