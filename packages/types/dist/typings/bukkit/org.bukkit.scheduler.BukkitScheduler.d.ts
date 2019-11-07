// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace scheduler {
            // @ts-ignore
            interface BukkitScheduler {
                /**
                 * Schedules a once off task to occur after a delay.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                // @ts-ignore
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number): number;
                // @ts-ignore
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): number;
                /**
                 * Schedules a once off task to occur as soon as possible.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                // @ts-ignore
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): number;
                // @ts-ignore
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): number;
                /**
                 * Schedules a repeating task.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                // @ts-ignore
                 scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number, period: number): number;
                // @ts-ignore
                 scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur after a delay. This task will be
                 * executed by a thread managed by the scheduler.
                 */
                // @ts-ignore
                 scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur as soon as possible. This task will
                 * be executed by a thread managed by the scheduler.
                 */
                // @ts-ignore
                 scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a repeating task. This task will be executed by a thread
                 * managed by the scheduler.
                 */
                // @ts-ignore
                 scheduleAsyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number, period: number): number;
                /**
                 * Calls a method on the main thread and returns a Future object. This
                 * task will be executed by the main server thread.
                 * <ul>
                 * <li>Note: The Future.get() methods must NOT be called from the main
                 * thread.
                 * <li>Note2: There is at least an average of 10ms latency until the
                 * isDone() method returns true.
                 * </ul>
                 */
                // @ts-ignore
                 callSyncMethod(plugin: org.bukkit.plugin.Plugin, task: java.util.concurrent.Callable): java.util.concurrent.Future;
                /**
                 * Removes task from scheduler.
                 */
                // @ts-ignore
                 cancelTask(taskId: number): void;
                /**
                 * Removes all tasks associated with a particular plugin from the
                 * scheduler.
                 */
                // @ts-ignore
                 cancelTasks(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Check if the task currently running.
                 * <p>
                 * A repeating task might not be running currently, but will be running in
                 * the future. A task that has finished, and does not repeat, will not be
                 * running ever again.
                 * <p>
                 * Explicitly, a task is running if there exists a thread for it, and that
                 * thread is alive.
                 */
                // @ts-ignore
                 isCurrentlyRunning(taskId: number): boolean;
                /**
                 * Check if the task queued to be run later.
                 * <p>
                 * If a repeating task is currently running, it might not be queued now
                 * but could be in the future. A task that is not queued, and not running,
                 * will not be queued again.
                 */
                // @ts-ignore
                 isQueued(taskId: number): boolean;
                /**
                 * Returns a list of all active workers.
                 * <p>
                 * This list contains asynch tasks that are being executed by separate
                 * threads.
                 */
                // @ts-ignore
                 getActiveWorkers(): java.util.List;
                /**
                 * Returns a list of all pending tasks. The ordering of the tasks is not
                 * related to their order of execution.
                 */
                // @ts-ignore
                 getPendingTasks(): java.util.List;
                /**
                 * Returns a task that will run on the next server tick.
                 */
                // @ts-ignore
                 runTask(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run on the next server tick.
                 */
                // @ts-ignore
                 runTask(plugin: org.bukkit.plugin.Plugin, task: java.util.function$.Consumer): void;
                // @ts-ignore
                 runTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 */
                // @ts-ignore
                 runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 */
                // @ts-ignore
                 runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.util.function$.Consumer): void;
                // @ts-ignore
                 runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 */
                // @ts-ignore
                 runTaskLater(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 */
                // @ts-ignore
                 runTaskLater(plugin: org.bukkit.plugin.Plugin, task: java.util.function$.Consumer, delay: number): void;
                // @ts-ignore
                 runTaskLater(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 */
                // @ts-ignore
                 runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 */
                // @ts-ignore
                 runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.util.function$.Consumer, delay: number): void;
                // @ts-ignore
                 runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 */
                // @ts-ignore
                 runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 */
                // @ts-ignore
                 runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: java.util.function$.Consumer, delay: number, period: number): void;
                // @ts-ignore
                 runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 */
                // @ts-ignore
                 runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.lang.Runnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 */
                // @ts-ignore
                 runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: java.util.function$.Consumer, delay: number, period: number): void;
                // @ts-ignore
                 runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
            }
        }
    }
}
