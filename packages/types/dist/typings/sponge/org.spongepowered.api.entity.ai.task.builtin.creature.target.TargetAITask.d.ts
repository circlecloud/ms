// @ts-nocheck
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
                                    interface TargetAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                        /**
                                         * Gets whether the owning {@link Agent} can visibly "see" the
                                         * {@link Entity} being targeted such that any {@link BlockType}s that
                                         * are visibly opaque will prevent the owning {@link Agent} from
                                         * targeting that {@link Entity}.
                                         */
                                        // @ts-ignore
                                         shouldCheckSight(): boolean;
                                        /**
                                         * Sets whether the owning {@link Agent} can visibly "see" the
                                         * {@link Entity} being targeted such that any {@link BlockType}s that
                                         * are visibly opaque will prevent the owning {@link Agent} from
                                         * targeting that {@link Entity}.
                                         */
                                        // @ts-ignore
                                         setCheckSight(checkSight: boolean): org.spongepowered.api.entity.ai.task.builtin.creature.target.TargetAITask;
                                        /**
                                         * Gets whether an {@link Entity} can only be targeted within a "short"
                                         * radius from the owning {@link Agent}.
                                         */
                                        // @ts-ignore
                                         onlyNearby(): boolean;
                                        /**
                                         * Sets whether an {@link Entity} can only be targeted within a "short"
                                         * radius from the owning {@link Agent}.
                                         */
                                        // @ts-ignore
                                         setOnlyNearby(nearby: boolean): org.spongepowered.api.entity.ai.task.builtin.creature.target.TargetAITask;
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
