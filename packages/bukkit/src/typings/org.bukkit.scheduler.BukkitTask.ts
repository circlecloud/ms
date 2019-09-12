declare namespace org {
    namespace bukkit {
        namespace scheduler {
            class BukkitTask {
                /**
                 * Returns the taskId for the task.
                 */
                public getTaskId(): number;
                /**
                 * Returns the Plugin that owns this task.
                 */
                public getOwner(): org.bukkit.plugin.Plugin;
                /**
                 * Returns true if the Task is a sync task.
                 */
                public isSync(): boolean;
                /**
                 * Returns true if this task has been cancelled.
                 */
                public isCancelled(): boolean;
                /**
                 * Will attempt to cancel this task.
                 */
                public cancel(): void;
            }
        }
    }
}
