declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    // @ts-ignore
                    interface Goal {
                        /**
                         * The type of this goal.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.entity.ai.GoalType;
                        /**
                         * The {@link Agent} that owns this goal.
                         */
                        // @ts-ignore
                         getOwner(): org.spongepowered.api.entity.living.Agent;
                        /**
                         * Adds a new {@link AITask} to this goal.
                         */
                        // @ts-ignore
                         addTask(priority: number, task: org.spongepowered.api.entity.ai.task.AITask): org.spongepowered.api.entity.ai.Goal;
                        /**
                         * Removes a specific {@link AITask} from this goal.
                         */
                        // @ts-ignore
                         removeTask(task: org.spongepowered.api.entity.ai.task.AITask): org.spongepowered.api.entity.ai.Goal;
                        /**
                         * Removes all {@link AITask}s whose {@link AITaskType} matches
                         * the provided type.
                         */
                        // @ts-ignore
                         removeTasks(type: org.spongepowered.api.entity.ai.task.AITaskType): org.spongepowered.api.entity.ai.Goal;
                        /**
                         * Gets all {@link AITask}s whose {@link AITaskType} matches
                         * the provided type.
                         */
                        // @ts-ignore
                         getTasksByType(type: org.spongepowered.api.entity.ai.task.AITaskType): any[] /*java.util.List*/;
                        /**
                         * Gets all {@link AITask}s in this goal.
                         */
                        // @ts-ignore
                         getTasks(): any[] /*java.util.List*/;
                        /**
                         * Clears all {@link AITask}s from this goal.
                         */
                        // @ts-ignore
                         clear(): void;
                    }
                }
            }
        }
    }
}
