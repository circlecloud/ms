// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace scheduler {
            // @ts-ignore
            interface BukkitWorker {
                /**
                 * Returns the taskId for the task being executed by this worker.
                 */
                // @ts-ignore
                 getTaskId(): number;
                /**
                 * Returns the Plugin that owns this task.
                 */
                // @ts-ignore
                 getOwner(): org.bukkit.plugin.Plugin;
                /**
                 * Returns the thread for the worker.
                 */
                // @ts-ignore
                 getThread(): java.lang.Thread;
            }
        }
    }
}
