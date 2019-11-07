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
                                interface RangeAgentAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                    /**
                                     * Creates a new {@link Builder} to build a new {@link RangeAgentAITask}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask.Builder;
                                    /**
                                     * Gets the movement speed modifier for moving towards a targeted
                                     * {@link Entity}.
                                     */
                                    // @ts-ignore
                                     getMoveSpeed(): number;
                                    /**
                                     * Sets the movement speed modifier for moving towards a targeted
                                     * {@link Entity}.
                                     */
                                    // @ts-ignore
                                     setMoveSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask;
                                    /**
                                     * Gets the delay in ticks between attempts to attack the targeted
                                     * {@link Entity}.
                                     */
                                    // @ts-ignore
                                     getDelayBetweenAttacks(): number;
                                    /**
                                     * The time, in ticks, this {@link Ranger} will wait before attacking
                                     * again.
                                     */
                                    // @ts-ignore
                                     setDelayBetweenAttacks(delay: number): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask;
                                    /**
                                     * Gets the radius of which the owning {@link Ranger} will attempt to
                                     * attack a targeted {@link Entity}.
                                     */
                                    // @ts-ignore
                                     getAttackRadius(): number;
                                    /**
                                     * Sets the radius of which the owning {@link Ranger} will attempt to
                                     * attack a targeted {@link Entity}.
                                     */
                                    // @ts-ignore
                                     setAttackRadius(radius: number): org.spongepowered.api.entity.ai.task.builtin.creature.RangeAgentAITask;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
