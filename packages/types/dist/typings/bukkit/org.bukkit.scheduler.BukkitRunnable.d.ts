// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace scheduler {
            // @ts-ignore
            abstract class BukkitRunnable extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Returns true if this task has been cancelled.
                 */
                // @ts-ignore
                public isCancelled(): boolean;
                /**
                 * Attempts to cancel this task.
                 */
                // @ts-ignore
                public cancel(): void;
                /**
                 * Schedules this in the Bukkit scheduler to run on next tick.
                 */
                // @ts-ignore
                public runTask(plugin: org.bukkit.plugin.Plugin): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules this in the Bukkit scheduler to run asynchronously.
                 */
                // @ts-ignore
                public runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin): org.bukkit.scheduler.BukkitTask;
                /**
                 * Schedules this to run after the specified number of server ticks.
                 */
                // @ts-ignore
                public runTaskLater(plugin: org.bukkit.plugin.Plugin, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules this to run asynchronously after the specified number of
                 * server ticks.
                 */
                // @ts-ignore
                public runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Schedules this to repeatedly run until cancelled, starting after the
                 * specified number of server ticks.
                 */
                // @ts-ignore
                public runTaskTimer(plugin: org.bukkit.plugin.Plugin, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules this to repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 */
                // @ts-ignore
                public runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Gets the task id for this runnable.
                 */
                // @ts-ignore
                public getTaskId(): number;
            }
        }
    }
}
