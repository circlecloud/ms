declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    // @ts-ignore
                    interface Agent extends org.spongepowered.api.entity.living.Living {
                        /**
                         * Gets the current target, usually according to the various
                         * {@link AITask}s that are acting on this agent.
                         */
                        // @ts-ignore
                         getTarget(): java.util.Optional;
                        /**
                         * Sets the current target, usually to bypass what the {@link AITask}s are
                         * deciding to be the target.
                         */
                        // @ts-ignore
                         setTarget(target: org.spongepowered.api.entity.Entity): void;
                        /**
                         * Gets a copy of the {@link AgentData} associated with this {@link Agent}.
                         */
                        // @ts-ignore
                         getAgentData(): org.spongepowered.api.data.manipulator.mutable.entity.AgentData;
                        /**
                         * Gets the {@link Value} for whether AI tasks are enabled or not.
                         */
                        // @ts-ignore
                         aiEnabled(): org.spongepowered.api.data.value.mutable.Value;
                        /**
                         * Gets a {@link Goal} based on the {@link GoalType}.
                         */
                        // @ts-ignore
                         getGoal(type: org.spongepowered.api.entity.ai.GoalType): java.util.Optional;
                    }
                }
            }
        }
    }
}
