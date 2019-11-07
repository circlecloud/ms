// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface ExperienceOrb extends org.spongepowered.api.entity.Entity {
                    /**
                     * Gets a copy of the {@link ExpOrbData} associated with this
                     * {@link ExperienceOrb}.
                     */
                    // @ts-ignore
                     experienceHeld(): org.spongepowered.api.data.manipulator.mutable.entity.ExpOrbData;
                    /**
                     * Gets the {@link Value} for the amount of "experience" stored.
                     */
                    // @ts-ignore
                     experience(): org.spongepowered.api.data.value.mutable.Value;
                }
            }
        }
    }
}
