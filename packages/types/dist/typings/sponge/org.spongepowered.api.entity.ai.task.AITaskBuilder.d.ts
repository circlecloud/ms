declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace ai {
                    namespace task {
                        // @ts-ignore
                        interface AITaskBuilder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Builds the {@link AITask}.
                             */
                            // @ts-ignore
                             build(owner: org.spongepowered.api.entity.living.Agent): org.spongepowered.api.entity.ai.task.AITask;
                        }
                    }
                }
            }
        }
    }
}
