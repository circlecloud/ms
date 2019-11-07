// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                // @ts-ignore
                                interface WanderAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                    /**
                                     * Creates a new {@link Builder} to build a new
                                     * {@link WanderAITask}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.entity.ai.task.builtin.creature.WanderAITask.Builder;
                                    /**
                                     * Gets the speed modifier at which the owning {@link Entity}
                                     * will move around to appear to "wander".
                                     */
                                    // @ts-ignore
                                     getSpeed(): number;
                                    /**
                                     * Sets the speed modifier at which the owning {@link Entity}
                                     * will move around to appear to "wander".
                                     */
                                    // @ts-ignore
                                     setSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.WanderAITask;
                                    /**
                                     * Gets the chance that the owning {@link Entity} will "wander".
                                     */
                                    // @ts-ignore
                                     getExecutionChance(): number;
                                    /**
                                     * Sets the chance that the owning {@link Entity} will perform
                                     * a "wander".
                                     */
                                    // @ts-ignore
                                     setExecutionChance(executionChance: number): org.spongepowered.api.entity.ai.task.builtin.creature.WanderAITask;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
