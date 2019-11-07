declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scheduler {
                // @ts-ignore
                interface Task extends org.spongepowered.api.util.Identifiable {
                    /**
                     * Creates a new {@link Builder} to build a {@link Task}.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.scheduler.Task.Builder;
                    /**
                     * Gets the name of this task.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Returns the plugin that scheduled this task.
                     */
                    // @ts-ignore
                     getOwner(): org.spongepowered.api.plugin.PluginContainer;
                    /**
                     * Gets the delay that the task was scheduled to run after. A delay of 0
                     * represents that the task started immediately.
                     */
                    // @ts-ignore
                     getDelay(): number;
                    /**
                     * Gets the interval for repeating tasks. An interval of 0 represents that
                     * the task does not repeat.
                     */
                    // @ts-ignore
                     getInterval(): number;
                    /**
                     * Cancels the task. Cancelling a repeating task will prevent any further
                     * repetitions of the task.
                     */
                    // @ts-ignore
                     cancel(): boolean;
                    /**
                     * Gets the {@link Consumer}<{@link Task}> that this task is running.
                     */
                    // @ts-ignore
                     getConsumer(): java.util.function$.Consumer;
                    /**
                     * Gets whether this task is asynchronous.
                     */
                    // @ts-ignore
                     isAsynchronous(): boolean;
                }
            }
        }
    }
}
