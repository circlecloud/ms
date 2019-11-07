// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface ChangeEntityExperienceEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original total experience unmodified by event changes.
                         */
                        // @ts-ignore
                         getOriginalExperience(): number;
                        /**
                         * Gets the original values for the experience unmodified by event changes.
                         */
                        // @ts-ignore
                         getOriginalData(): org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExperienceHolderData;
                        /**
                         * Gets the total experience after event changes.
                         */
                        // @ts-ignore
                         getExperience(): number;
                        /**
                         * Sets the final total experience after event changes.
                         */
                        // @ts-ignore
                         setExperience(experience: number): void;
                        /**
                         * Gets the experience after an event has been processed. Modify this
                         * data manipulator to change the final experience.
                         */
                        // @ts-ignore
                         getFinalData(): org.spongepowered.api.data.manipulator.mutable.entity.ExperienceHolderData;
                        /**
                         * This method exists solely to provide backwards-compatibility with existing plugins
                         * using the old ChangeExperienceEvent. It should not be called directly - instead,
                         * plugins should use {@link SpongeEventFactory#createChangeEntityExperienceEvent(Cause, ImmutableExperienceHolderData, ExperienceHolderData, Entity)}
                         */
                        // @ts-ignore
                         createChangeEntityExperienceEvent(cause: org.spongepowered.api.event.cause.Cause, originalExperience: number, experience: number, targetEntity: org.spongepowered.api.entity.Entity): org.spongepowered.api.event.entity.ChangeEntityExperienceEvent;
                    }
                }
            }
        }
    }
}
