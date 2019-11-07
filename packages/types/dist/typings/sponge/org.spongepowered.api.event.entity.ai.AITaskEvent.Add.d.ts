declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ai {
                        namespace AITaskEvent {
                            // @ts-ignore
                            interface Add extends org.spongepowered.api.event.entity.ai.AITaskEvent {
                                /**
                                 * Gets the original priority that {@link AITaskEvent#getTask()} will
                                 * be assigned to. See {@link AITaskEvent#getPriority()}.
                                 */
                                // @ts-ignore
                                 getOriginalPriority(): number;
                                /**
                                 * Sets the priority the task will be assigned to. See
                                 * {@link AITaskEvent#getPriority()}.
                                 */
                                // @ts-ignore
                                 setPriority(priority: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
