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
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): number;
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): number;
                /**
                 * Schedules a once off task to occur as soon as possible.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any): number;
                 scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): number;
                /**
                 * Schedules a repeating task.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                 scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): number;
                 scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur after a delay. This task will be
                 * executed by a thread managed by the scheduler.
                 */
                 scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur as soon as possible. This task will
                 * be executed by a thread managed by the scheduler.
                 */
                 scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a repeating task. This task will be executed by a thread
                 * managed by the scheduler.
                 */
                 scheduleAsyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): number;
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
                 callSyncMethod(plugin: org.bukkit.plugin.Plugin, task: any): any;
                /**
                 * Removes task from scheduler.
                 */
                 cancelTask(taskId: number): void;
                /**
                 * Removes all tasks associated with a particular plugin from the
                 * scheduler.
                 */
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
                 isCurrentlyRunning(taskId: number): boolean;
                /**
                 * Check if the task queued to be run later.
                 * <p>
                 * If a repeating task is currently running, it might not be queued now
                 * but could be in the future. A task that is not queued, and not running,
                 * will not be queued again.
                 */
                 isQueued(taskId: number): boolean;
                /**
                 * Returns a list of all active workers.
                 * <p>
                 * This list contains asynch tasks that are being executed by separate
                 * threads.
                 */
                 getActiveWorkers(): any[] /*java.util.List*/;
                /**
                 * Returns a list of all pending tasks. The ordering of the tasks is not
                 * related to their order of execution.
                 */
                 getPendingTasks(): any[] /*java.util.List*/;
                /**
                 * Returns a task that will run on the next server tick.
                 */
                 runTask(plugin: org.bukkit.plugin.Plugin, task: any): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run on the next server tick.
                 */
                 runTask(plugin: org.bukkit.plugin.Plugin, task: any): void;
                 runTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 */
                 runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 */
                 runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any): void;
                 runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 */
                 runTaskLater(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 */
                 runTaskLater(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): void;
                 runTaskLater(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 */
                 runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 */
                 runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): void;
                 runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 */
                 runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 */
                 runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): void;
                 runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 */
                 runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 */
                 runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): void;
                 runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
            }
        }
    }
}
