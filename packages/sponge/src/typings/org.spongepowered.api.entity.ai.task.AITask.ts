declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        // @ts-ignore
                        interface AITask {
                            /**
                             * Gets the {@link AITaskType} of this task.
                             */
                            // @ts-ignore
                             getType(): org.spongepowered.api.entity.ai.task.AITaskType;
                            /**
                             * Gets the {@link Goal} that is updating this task, if any.
                             */
                            // @ts-ignore
                             getGoal(): any;
                            /**
                             * Gets the {@link Agent} that owns this task, if any.
                             */
                            // @ts-ignore
                             getOwner(): any;
                            /**
                             * Tests if the provided {@link AITask} is allowed to be ran concurrently
                             * with this task.
                             * <p>This plays a role in determining if tasks should be updated or not.
                             * If this method
                             * is being called on this task, that means:</p>
                             * <ol>
                             * <li>This task has higher priority than the provided task for our
                             * {@link AITask#getGoal()}.</li>
                             * <li>Returning "false" will remove the provided task from the list of
                             * updated tasks, if not
                             * there already.</li>
                             * <li>Returning "true" will add the provided task to the list of updated
                             * tasks, if not there
                             * already.</li>
                             * </ol>
                             */
                            // @ts-ignore
                             canRunConcurrentWith(other: org.spongepowered.api.entity.ai.task.AITask): boolean;
                            /**
                             * Returns if this task can be interrupted. This determines if this task
                             * can be added to the list of updated tasks as well as if it should
                             * continue updating.
                             * <p>Thought should be made before blindly returning true or false here.
                             * In Minecraft, all tasks can be interrupted by higher priority tasks
                             * (tasks added with lower numerical values in
                             * {@link Goal#addTask(int, AITask)}) but a task being created by a plugin
                             * might be deemed critical and as such should return false.</p>
                             * <p>Due note that the meaning of "true" changes based on the state of the
                             * {@link Goal}.  To put it simply, this value can mean "Should I be added
                             * as an updating task or "Should I continue updating?". Regardless of the
                             * question, the next step that happens is transferring from this method to
                             * {@link AITask#canRunConcurrentWith(AITask)} in the next AI tick loop.</p>
                             */
                            // @ts-ignore
                             canBeInterrupted(): boolean;
                        }
                    }
                }
            }
        }
    }
}
