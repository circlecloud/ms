// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface ExperienceHolderData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MutableBoundedValue}  for the amount of experience
                                 * gained since the beginning of the current {@link #level()}. Normally,
                                 * the higher the level, the more "experience" required to gain another
                                 * level.
                                 */
                                // @ts-ignore
                                 experienceSinceLevel(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the amount of experience
                                 * required between the current {@link #level()} and the next level.
                                 * This can be presumed to be the supposed "maximum" for the
                                 * {@link #experienceSinceLevel()} amount.
                                 */
                                // @ts-ignore
                                 getExperienceBetweenLevels(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue;
                                /**
                                 * Gets the {@link MutableBoundedValue} for the current "level" of
                                 * experience deserved according to the {@link #totalExperience()} and
                                 * a function from implementation defining how much experience required
                                 * per level.
                                 */
                                // @ts-ignore
                                 level(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                                /**
                                 * Gets the total amount of experience stored.
                                 */
                                // @ts-ignore
                                 totalExperience(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
