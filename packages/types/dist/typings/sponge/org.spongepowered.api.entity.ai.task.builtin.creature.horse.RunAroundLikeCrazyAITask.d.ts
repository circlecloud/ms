declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                namespace horse {
                                    // @ts-ignore
                                    interface RunAroundLikeCrazyAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                        /**
                                         * Creates a new {@link Builder} to build a new
                                         * {@link RunAroundLikeCrazyAITask}.
                                         */
                                        // @ts-ignore
                                         builder(): org.spongepowered.api.entity.ai.task.builtin.creature.horse.RunAroundLikeCrazyAITask.Builder;
                                        /**
                                         * Gets the speed modifier at which when an {@link Entity} is running
                                         * around, the movement speed is amplified by this modifier.
                                         */
                                        // @ts-ignore
                                         getSpeed(): number;
                                        /**
                                         * Sets the speed modifier at which when an {@link Entity} is running
                                         * around, the movement speed is amplified by this modifier.
                                         */
                                        // @ts-ignore
                                         setSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.horse.RunAroundLikeCrazyAITask;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
