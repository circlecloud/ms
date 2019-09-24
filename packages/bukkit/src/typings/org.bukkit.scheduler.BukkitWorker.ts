declare namespace org {
    namespace bukkit {
        namespace scheduler {
            // @ts-ignore
            interface BukkitWorker {
                /**
                 * Returns the taskId for the task being executed by this worker.
                 */
                 getTaskId(): number;
                /**
                 * Returns the Plugin that owns this task.
                 */
                 getOwner(): org.bukkit.plugin.Plugin;
                /**
                 * Returns the thread for the worker.
                 */
                 getThread(): any;
            }
        }
    }
}
