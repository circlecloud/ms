declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace scheduler {
                    // @ts-ignore
                    interface ScheduledTask {
                        /**
                         * Gets the unique ID of this task.
                         */
                        // @ts-ignore
                         getId(): number;
                        /**
                         * Return the plugin which scheduled this task for execution.
                         */
                        // @ts-ignore
                         getOwner(): any /*net.md_5.bungee.api.plugin.Plugin*/;
                        /**
                         * Get the actual method which will be executed by this task.
                         */
                        // @ts-ignore
                         getTask(): java.lang.Runnable;
                        /**
                         * Cancel this task to suppress subsequent executions.
                         */
                        // @ts-ignore
                         cancel(): void;
                    }
                }
            }
        }
    }
}
