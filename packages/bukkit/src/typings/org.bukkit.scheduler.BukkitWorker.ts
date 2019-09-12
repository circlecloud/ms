declare namespace org {
    namespace bukkit {
        namespace scheduler {
            class BukkitWorker {
                /**
                 * Returns the taskId for the task being executed by this worker.
                 */
                public getTaskId(): number;
                /**
                 * Returns the Plugin that owns this task.
                 */
                public getOwner(): org.bukkit.plugin.Plugin;
                /**
                 * Returns the thread for the worker.
                 */
                public getThread(): any;
            }
        }
    }
}
