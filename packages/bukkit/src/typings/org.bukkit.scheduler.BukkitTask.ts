declare namespace org {
    namespace bukkit {
        namespace scheduler {
            // @ts-ignore
            interface BukkitTask {
                /**
                 * Returns the taskId for the task.
                 */
                 getTaskId(): number;
                /**
                 * Returns the Plugin that owns this task.
                 */
                 getOwner(): org.bukkit.plugin.Plugin;
                /**
                 * Returns true if the Task is a sync task.
                 */
                 isSync(): boolean;
                /**
                 * Returns true if this task has been cancelled.
                 */
                 isCancelled(): boolean;
                /**
                 * Will attempt to cancel this task.
                 */
                 cancel(): void;
            }
        }
    }
}
