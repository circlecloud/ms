declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                // @ts-ignore
                                interface AttackLivingAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                    /**
                                     * Creates a new {@link Builder} to build a new
                                     * {@link AttackLivingAITask}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask.Builder;
                                    /**
                                     * Gets the "movement" speed modifier when targeting towards a
                                     * targeted {@link Entity}.
                                     */
                                    // @ts-ignore
                                     getSpeed(): number;
                                    /**
                                     * Sets the movement speed modifier when the parent {@link Creature}
                                     * is targeting an {@link Entity}.
                                     */
                                    // @ts-ignore
                                     setSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask;
                                    /**
                                     * Gets whether the navigator will attempt to continue to "target"
                                     * an {@link Entity} after certain circumstances have been met,
                                     * sometimes whether a targeted {@link Entity} has moved too far away,
                                     * moved to where there is an obstacle between the parent and the
                                     * targeted entity, etc.
                                     */
                                    // @ts-ignore
                                     hasLongMemory(): boolean;
                                    /**
                                     * Sets whether the task will continue to navigate the parent
                                     * {@link Agent} to continue targeting an {@link Entity} after the
                                     * entity has moved to where a direct navigation path is no longer
                                     * available.
                                     */
                                    // @ts-ignore
                                     setLongMemory(longMemory: boolean): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
