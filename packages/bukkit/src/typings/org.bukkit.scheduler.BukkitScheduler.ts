declare namespace org {
    namespace bukkit {
        namespace scheduler {
            class BukkitScheduler {
                /**
                 * Schedules a once off task to occur after a delay.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                public scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): number;
                public scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): number;
                /**
                 * Schedules a once off task to occur as soon as possible.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                public scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any): number;
                public scheduleSyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): number;
                /**
                 * Schedules a repeating task.
                 * <p>
                 * This task will be executed by the main server thread.
                 */
                public scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): number;
                public scheduleSyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur after a delay. This task will be
                 * executed by a thread managed by the scheduler.
                 */
                public scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a once off task to occur as soon as possible. This task will
                 * be executed by a thread managed by the scheduler.
                 */
                public scheduleAsyncDelayedTask(plugin: org.bukkit.plugin.Plugin, task: any): number;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Schedules a repeating task. This task will be executed by a thread
                 * managed by the scheduler.
                 */
                public scheduleAsyncRepeatingTask(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): number;
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
                public callSyncMethod(plugin: org.bukkit.plugin.Plugin, task: any): any;
                /**
                 * Removes task from scheduler.
                 */
                public cancelTask(taskId: number): void;
                /**
                 * Removes all tasks associated with a particular plugin from the
                 * scheduler.
                 */
                public cancelTasks(plugin: org.bukkit.plugin.Plugin): void;
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
                public isCurrentlyRunning(taskId: number): boolean;
                /**
                 * Check if the task queued to be run later.
                 * <p>
                 * If a repeating task is currently running, it might not be queued now
                 * but could be in the future. A task that is not queued, and not running,
                 * will not be queued again.
                 */
                public isQueued(taskId: number): boolean;
                /**
                 * Returns a list of all active workers.
                 * <p>
                 * This list contains asynch tasks that are being executed by separate
                 * threads.
                 */
                public getActiveWorkers(): any[] /*java.util.List*/;
                /**
                 * Returns a list of all pending tasks. The ordering of the tasks is not
                 * related to their order of execution.
                 */
                public getPendingTasks(): any[] /*java.util.List*/;
                /**
                 * Returns a task that will run on the next server tick.
                 */
                public runTask(plugin: org.bukkit.plugin.Plugin, task: any): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run on the next server tick.
                 */
                public runTask(plugin: org.bukkit.plugin.Plugin, task: any): void;
                public runTask(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 */
                public runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously.
                 */
                public runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any): void;
                public runTaskAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 */
                public runTaskLater(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will run after the specified number of server
                 * ticks.
                 */
                public runTaskLater(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): void;
                public runTaskLater(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 */
                public runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will run asynchronously after the specified number
                 * of server ticks.
                 */
                public runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number): void;
                public runTaskLaterAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 */
                public runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * Returns a task that will repeatedly run until cancelled, starting after
                 * the specified number of server ticks.
                 */
                public runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): void;
                public runTaskTimer(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 */
                public runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
                /**
                 * <b>Asynchronous tasks should never access any API in Bukkit. Great care
                 * should be taken to assure the thread-safety of asynchronous tasks.</b>
                 * <p>
                 * Returns a task that will repeatedly run asynchronously until cancelled,
                 * starting after the specified number of server ticks.
                 */
                public runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: any, delay: number, period: number): void;
                public runTaskTimerAsynchronously(plugin: org.bukkit.plugin.Plugin, task: org.bukkit.scheduler.BukkitRunnable, delay: number, period: number): org.bukkit.scheduler.BukkitTask;
            }
        }
    }
}
