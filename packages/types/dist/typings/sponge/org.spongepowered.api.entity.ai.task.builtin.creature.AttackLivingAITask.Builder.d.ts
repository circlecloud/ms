// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            namespace creature {
                                namespace AttackLivingAITask {
                                    // @ts-ignore
                                    interface Builder extends org.spongepowered.api.entity.ai.task.AITaskBuilder {
                                        /**
                                         * Sets the speed modifier at which the owning {@link Agent} will be
                                         * moving towards a targeted {@link Entity}.
                                         */
                                        // @ts-ignore
                                         speed(speed: number): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask.Builder;
                                        /**
                                         * Sets whether the task will force the owning {@link Agent} to
                                         * persist targeting an {@link Entity} after a direct path is
                                         * no longer available.
                                         */
                                        // @ts-ignore
                                         longMemory(): org.spongepowered.api.entity.ai.task.builtin.creature.AttackLivingAITask.Builder;
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
