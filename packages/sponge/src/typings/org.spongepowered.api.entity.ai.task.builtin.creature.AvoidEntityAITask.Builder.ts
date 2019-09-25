declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                namespace AvoidEntityAITask {
                                    // @ts-ignore
                                    interface Builder extends org.spongepowered.api.entity.ai.task.AITaskBuilder {
                                        /**
                                         * Sets the {@link Predicate} for filtering which {@link Entity} instances
                                         * are considered to be "avoided" by the owning {@link Agent}.
                                         */
                                        // @ts-ignore
                                         targetSelector(predicate: any): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask.Builder;
                                        /**
                                         * Sets the search distance at which any {@link Entity} instances in a
                                         * radius of the parent {@link Agent} are considered for avoiding.
                                         */
                                        // @ts-ignore
                                         searchDistance(distance: number): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask.Builder;
                                        /**
                                         * Sets the peed "modifier" for which the parent {@link Agent} will
                                         * move away from a found {@link Entity} to "avoid" when in close
                                         * range. Close range is currently defined as {@code 7} blocks.
                                         */
                                        // @ts-ignore
                                         closeRangeSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask.Builder;
                                        /**
                                         * Sets the close range speed "modifier" for which the parent {@link Agent}
                                         * will move away from a found {@link Entity} to "avoid" when in
                                         * a farther range than 7 blocks.
                                         */
                                        // @ts-ignore
                                         farRangeSpeed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.AvoidEntityAITask.Builder;
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
