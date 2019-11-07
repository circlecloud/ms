// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            // @ts-ignore
                            interface WatchClosestAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                /**
                                 * Creates a new {@link Builder} to build a new
                                 * {@link WatchClosestAITask}.
                                 */
                                // @ts-ignore
                                 builder(): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask.Builder;
                                /**
                                 * Gets the {@link Class} of the {@link Entity} type to "stare" or
                                 * "watch" when that type of entity is nearby.
                                 */
                                // @ts-ignore
                                 getWatchedClass(): java.lang.Class;
                                /**
                                 * Sets the {@link Class} of the {@link Entity} type to "stare" or
                                 * "watch" when that type of entity is nearby.
                                 */
                                // @ts-ignore
                                 setWatchedClass(watchedClass: java.lang.Class): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask;
                                /**
                                 * Gets the maximum distance to "watch" a targeted {@link Entity}.
                                 */
                                // @ts-ignore
                                 getMaxDistance(): number;
                                /**
                                 * Sets the maximum distance to "watch" a targeted {@link Entity}.
                                 */
                                // @ts-ignore
                                 setMaxDistance(maxDistance: number): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask;
                                /**
                                 * Gets the chance that an {@link Entity} will "watch" a targeted
                                 * {@link Entity}.
                                 */
                                // @ts-ignore
                                 getChance(): number;
                                /**
                                 * SEts the chance to "watch" a targeted {@link Entity}.
                                 */
                                // @ts-ignore
                                 setChance(chance: number): org.spongepowered.api.entity.ai.task.builtin.WatchClosestAITask;
                            }
                        }
                    }
                }
            }
        }
    }
}
