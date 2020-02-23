declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
            abstract class NukkitRunnable extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Attempts to cancel this task.
                 */
                // @ts-ignore
                public cancel(): void;
                // @ts-ignore
                public runTask(plugin: cn.nukkit.plugin.Plugin): java.lang.Runnable;
                // @ts-ignore
                public runTaskAsynchronously(plugin: cn.nukkit.plugin.Plugin): java.lang.Runnable;
                // @ts-ignore
                public runTaskLater(plugin: cn.nukkit.plugin.Plugin, delay: number): java.lang.Runnable;
                // @ts-ignore
                public runTaskLaterAsynchronously(plugin: cn.nukkit.plugin.Plugin, delay: number): java.lang.Runnable;
                // @ts-ignore
                public runTaskTimer(plugin: cn.nukkit.plugin.Plugin, delay: number, period: number): java.lang.Runnable;
                // @ts-ignore
                public runTaskTimerAsynchronously(plugin: cn.nukkit.plugin.Plugin, delay: number, period: number): java.lang.Runnable;
                /**
                 * Gets the task id for this runnable.
                 */
                // @ts-ignore
                public getTaskId(): number;
            }
        }
    }
}
