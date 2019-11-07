declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        // @ts-ignore
                        abstract class AbstractAITask extends java.lang.Object implements org.spongepowered.api.entity.ai.task.AITask {
                            /**
                             * Creates a new {@link AbstractAITask} with the provided
                             * {@link AITask}.
                             */
                            // @ts-ignore
                            constructor(type: org.spongepowered.api.entity.ai.task.AITaskType)
                            // @ts-ignore
                            public getType(): org.spongepowered.api.entity.ai.task.AITaskType;
                            // @ts-ignore
                            public getGoal(): java.util.Optional;
                            /**
                             * Invoked when the task is "started". A "start" of a task occurs at the
                             * "start" of the "AI" is "ticking". Depending on the case where
                             * {@link #shouldUpdate()} returns {@code false}, an {@link AITask} is
                             * <strong>NOT</strong> going to be called, so this method would not be
                             * called at the "start" of the tick to "prepare" for {@link #update()}.
                             */
                            // @ts-ignore
                            public abstract start(): void;
                            /**
                             * Determines whether this {@link AITask} should be considered for "ticking"
                             * or {@link #start()}, {@link #update()}, and {@link #reset()} are called
                             * for that "AI" tick.
                             */
                            // @ts-ignore
                            public abstract shouldUpdate(): boolean;
                            /**
                             * Performs any customary logic for this "task" to modify the parent
                             * {@link Agent} in any way, including navigation, health, potion effects,
                             * etc. Only called when {@link #shouldUpdate()} returns {@code true},
                             * and after {@link #start()} has completed. Likewise, if
                             * {@link #continueUpdating()}
                             */
                            // @ts-ignore
                            public abstract update(): void;
                            /**
                             * Called to verify that this {@link AITask} needs to {@link #update()}
                             * in this tick. If this returns {@code false}, this {@link AITask}
                             * is removed from use and {@link #reset()} is called.
                             */
                            // @ts-ignore
                            public abstract continueUpdating(): boolean;
                            /**
                             * Performs any reset necessary for this task during the current tick.
                             * <p>Note that this may be called during any state during {@link #start()}
                             * or {@link #update()} such that the task is removed from use for the
                             * current "AI" tick.</p>
                             */
                            // @ts-ignore
                            public abstract reset(): void;
                        }
                    }
                }
            }
        }
    }
}
