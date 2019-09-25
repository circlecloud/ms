declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                // @ts-ignore
                                interface AvoidEntityAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                    /**
                                     * Creates a new {@link Builder} for creating a new {@link AvoidEntityAITask}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask.Builder;
                                    /**
                                     * Gets the {@link Predicate} for filtering which {@link Entity} instances
                                     * are qualified to have the owning {@link Agent} move away from the
                                     * {@link Entity} of which the {@link Predicate#test(Object)} returns
                                     * {@code true}.
                                     */
                                    // @ts-ignore
                                     getTargetSelector(): any;
                                    /**
                                     * Sets the {@link Predicate} for filtering which {@link Entity} instances
                                     * are considered to be "avoided" by the owning {@link Agent}.
                                     */
                                    // @ts-ignore
                                     setTargetSelector(predicate: any): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask;
                                    /**
                                     * Gets the search distance at which any {@link Entity} instances in a
                                     * radius of the parent {@link Agent} are considered for avoiding.
                                     */
                                    // @ts-ignore
                                     getSearchDistance(): number;
                                    /**
                                     * Sets the search distance at which any {@link Entity} instances in a
                                     * radius of the parent {@link Agent} are considered for avoiding.
                                     */
                                    // @ts-ignore
                                     setSearchDistance(distance: number): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask;
                                    /**
                                     * Gets the speed "modifier" for which the parent {@link Agent} will
                                     * move away from a found {@link Entity} to "avoid" when in close
                                     * range. Close range is currently defined as {@code 7} blocks.
                                     */
                                    // @ts-ignore
                                     getCloseRangeSpeed(): number;
                                    /**
                                     * Sets the peed "modifier" for which the parent {@link Agent} will
                                     * move away from a found {@link Entity} to "avoid" when in close
                                     * range. Close range is currently defined as {@code 7} blocks.
                                     */
                                    // @ts-ignore
                                     setCloseRangeSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask;
                                    /**
                                     * Gets the close range speed "modifier" for which the parent {@link Agent}
                                     * will move away from a found {@link Entity} to "avoid" when in
                                     * a farther range than 7 blocks.
                                     */
                                    // @ts-ignore
                                     getFarRangeSpeed(): number;
                                    /**
                                     * Sets the close range speed "modifier" for which the parent {@link Agent}
                                     * will move away from a found {@link Entity} to "avoid" when in
                                     * a farther range than 7 blocks.
                                     */
                                    // @ts-ignore
                                     setFarRangeSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
