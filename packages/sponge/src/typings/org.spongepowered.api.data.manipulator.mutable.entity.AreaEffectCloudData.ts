declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface AreaEffectCloudData extends org.spongepowered.api.data.manipulator.DataManipulator {
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
                                 * Gets the bounded {@code radiusOnUse} value of this cloud.
                                 * The radius is modified per {@link Entity} affected.
                                 * Once the radius is {@code 0}, the cloud dissipates.
                                 * <p>A positive radiusOnUse value will make the cloud grow, a negative
                                 * one will make it shrink.</p>
                                 */
                                // @ts-ignore
                                 radiusOnUse(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the bounded {@code radiusPerTick} value of this cloud.
                                 * <p>The radius is increased every tick. A radiusPerTick of 0 will cause
                                 * the cloud to stay at its original size until its duration runs out, a
                                 * positive number will make it grow, and a negative number will make it
                                 * shrink whenever it applies its effect.
                                 */
                                // @ts-ignore
                                 radiusPerTick(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the bounded {@code durationOnUse} value of this cloud.
                                 * The duration on use is added to the duration for every time
                                 * that this cloud applies it's {@link PotionEffect}s on an
                                 * {@link Entity}.
                                 * <p>If the duration on use is negative, every application of
                                 * an effect to an entity will decrease the cloud's duration</p>
                                 */
                                // @ts-ignore
                                 durationOnUse(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the bounded {@code applicationDelay} value of this cloud.
                                 * What this means is the application delay between times of application
                                 * on an {@link Entity}.
                                 */
                                // @ts-ignore
                                 applicationDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link ListValue} of {@link PotionEffect}s of this cloud.
                                 * The potion effects will affect any {@link Entity} according to the
                                 * various delays and ticks remaining of this cloud.
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
        }
    }
}
