declare namespace org {
    namespace bukkit {
        namespace scheduler {
            // @ts-ignore
            interface BukkitTask {
                /**
                 * Returns the taskId for the task.
                 */
                // @ts-ignore
                 getTaskId(): number;
                /**
                 * Returns the Plugin that owns this task.
                 */
                // @ts-ignore
                 getOwner(): org.bukkit.plugin.Plugin;
                /**
                 * Returns true if the Task is a sync task.
                 */
                // @ts-ignore
                 isSync(): boolean;
                /**
                 * Returns true if this task has been cancelled.
                 */
                // @ts-ignore
                 isCancelled(): boolean;
                /**
                 * Will attempt to cancel this task.
                 */
                // @ts-ignore
                 cancel(): void;
            }
        }
    }
}
