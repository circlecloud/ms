declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ai {
                        // @ts-ignore
                        interface AITaskEvent extends org.spongepowered.api.event.entity.living.TargetAgentEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link Goal} the task will be assigned to.
                             */
                            // @ts-ignore
                             getGoal(): org.spongepowered.api.entity.ai.Goal;
                            /**
                             * Gets the {@link AITask} to be assigned.
                             */
                            // @ts-ignore
                             getTask(): org.spongepowered.api.entity.ai.task.AITask;
                            /**
                             * Gets the priority the task will be assigned to. Lower numbers mean
                             * higher priority.
                             */
                            // @ts-ignore
                             getPriority(): number;
                        }
                    }
                }
            }
        }
    }
}
