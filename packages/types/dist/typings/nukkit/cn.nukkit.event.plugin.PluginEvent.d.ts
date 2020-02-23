declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace plugin {
                // @ts-ignore
                 class PluginEvent extends cn.nukkit.event.Event {
                    // @ts-ignore
                    constructor(plugin: cn.nukkit.plugin.Plugin)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPlugin(): cn.nukkit.plugin.Plugin;
                }
            }
        }
    }
}
