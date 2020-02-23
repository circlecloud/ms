declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
            abstract class PluginTask extends cn.nukkit.scheduler.Task {
                /**
                 * 构造一个插件拥有的任务的方法。<br>Constructs a plugin-owned task.
                 */
                // @ts-ignore
                constructor(owner: cn.nukkit.plugin.Plugin)
                // @ts-ignore
                protected owner: cn.nukkit.plugin.Plugin;
                /**
                 * 返回这个任务的所有者插件。<br>
                 * Returns the owner of this task.
                 */
                // @ts-ignore
                public getOwner(): cn.nukkit.plugin.Plugin;
            }
        }
    }
}
