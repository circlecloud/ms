// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        namespace builtin {
                            // @ts-ignore
                            interface SwimmingAITask extends org.spongepowered.api.entity.ai.task.AITask {
                                /**
                                 * Creates a new {@link Builder} to build a new
                                 * {@link SwimmingAITask}.
                                 */
                                // @ts-ignore
                                 builder(): org.spongepowered.api.entity.ai.task.builtin.SwimmingAITask.Builder;
                                /**
                                 * Gets the chance that the owning {@link Agent} will perform
                                 * a "jump". The chance is limited between {@code 0} and {@code 1},
                                 * to where the higher the chance, the more likely the entity will
                                 * "jump" to appear "swimming".
                                 */
                                // @ts-ignore
                                 getSwimChance(): number;
                                /**
                                 * Sets the chance that the owning {@link Agent} will perform
                                 * a "jump". The chance is limited between {@code 0} and {@code 1},
                                 * to where the higher the chance, the more likely the entity will
                                 * "jump" to appear "swimming".
                                 */
                                // @ts-ignore
                                 setSwimChance(chance: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
