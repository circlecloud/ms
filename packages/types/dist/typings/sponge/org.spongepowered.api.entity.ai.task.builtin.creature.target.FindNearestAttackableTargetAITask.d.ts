declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                namespace target {
                                    // @ts-ignore
                                    interface FindNearestAttackableTargetAITask extends org.spongepowered.api.entity.ai.task.builtin.creature.target.TargetAITask {
                                        /**
                                         * Creates a new {@link Builder} for building a new {@link FindNearestAttackableTargetAITask}.
                                         */
                                        // @ts-ignore
                                         builder(): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask.Builder;
                                        /**
                                         * Gets the {@link Class entity class} that can be targeted.
                                         */
                                        // @ts-ignore
                                         getTargetClass(): java.lang.Class;
                                        /**
                                         * Sets the {@link Class entity class} that can be targeted.
                                         */
                                        // @ts-ignore
                                         setTargetClass(targetClass: java.lang.Class): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask;
                                        /**
                                         * Gets the chance that this task will go through and attempt to find a
                                         * new target.
                                         */
                                        // @ts-ignore
                                         getChance(): number;
                                        /**
                                         * Sets the chance that this task will go through and attempt to find a
                                         * new target.
                                         */
                                        // @ts-ignore
                                         setChance(chance: number): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask;
                                        /**
                                         * Sets the {@link Predicate} filter to determine whether a {@link Living}
                                         * entity can be targeted.
                                         */
                                        // @ts-ignore
                                         filter(predicate: java.util.function$.Predicate): org.spongepowered.api.entity.ai.task.builtin.creature.target.FindNearestAttackableTargetAITask;
                                        /**
                                         * Gets the {@link Predicate} filter to determine whether a {@link Living living entity}
                                         * can be targeted.
                                         */
                                        // @ts-ignore
                                         getFilter(): java.util.function$.Predicate;
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
